import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'
import contentDisposition from 'content-disposition'
import { transliterate } from 'transliteration'

import { getExamFileNameById, renameExamFile } from '@services/archive'
import configs from '@lib/config'
import s3 from '@services/s3'
import { validateRights } from '@services/tkoUserService'
import { withSessionRoute } from '@lib/sessions'

const RenameExamBody = z.object({
  examId: z.number(),
  name: z.string().min(1)
})

const rename = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const isRights = validateRights(req.session.rights, 'rename')
      if (!isRights) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }

      const { examId, name } = RenameExamBody.parse(JSON.parse(req.body))

      if (!name) {
        return res.status(400).json({ error: 'name missing' })
      }

      const oldName = await getExamFileNameById(examId)

      if (oldName === null) {
        return res.status(404).json({ error: 'exam not found' })
      }

      const updatedExam = await renameExamFile(examId, name)
      if (updatedExam === null) {
        console.error(
          new Error(`Exam renaming didn't update any exams! Exam ID: ${examId}`)
        )
        return res.status(500).json({ error: 'error' })
      }

      // To change the Content Disposition header on S3, we need to make a copy of the
      // object
      const s3key = updatedExam.filePath
      try {
        await s3.copyObject({
          CopySource: `${configs.AWS_S3_BUCKET_ID}/${s3key}`,
          Bucket: configs.AWS_S3_BUCKET_ID,
          Key: s3key,
          ACL: 'private',
          ContentType: updatedExam.mimeType,
          ContentDisposition: contentDisposition(updatedExam.fileName, {
            type: 'inline',
            fallback: transliterate(updatedExam.fileName)
          }),
          MetadataDirective: 'REPLACE'
        })
      } catch (e) {
        // s3 failed! revert!
        await renameExamFile(examId, oldName)
        console.error('S3 rename failed!', e)
        throw e
      }

      return res.status(200).json({ ok: true })
    } catch (error) {
      console.log('Error renaming exam', error)
      return res.status(500).json({ error: '500 Internal Server Error' })
    }
  } else {
    res.status(405).send({ error: 'unvalid method' })
  }
}

const handler = withSessionRoute(rename)

export default handler
