import type { NextApiRequest, NextApiResponse } from 'next'
import contentDisposition from 'content-disposition'
import { transliterate } from 'transliteration'

import { getExamFileNameById, renameExamFile } from '@services/archive'
import configs from '@utilities/config'
import s3 from '@services/s3'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('rename')
  if (req.method === 'POST') {
    const { examId: unparsedExamId } = req.query
    try {
      if (!req.body.name) {
        return res.status(400).json({ error: 'name missing' })
      }

      const examId = parseInt(unparsedExamId as string, 10)
      if (isNaN(examId)) {
        return res.status(404).json({ error: 'invalid exam id' })
      }

      const oldName = await getExamFileNameById(examId)

      if (oldName === null) {
        return res.status(404).json({ error: 'exam not found' })
      }

      const updatedExam = await renameExamFile(examId, req.body.name)
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
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'internal server error' })
    }
  } else {
    console.log('ignoring, not post')
    res.redirect('/')
  }
}

export default handler
