import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import contentDisposition from 'content-disposition'
import { transliterate } from 'transliteration'

import { getExamFileNameById, renameExamFile } from '@services/archive'
import configs from '@lib/config'
import s3 from '@services/s3'
import { validateRights } from '@services/tkoUserService'

const RenameExamBody = z.object({
  examId: z.number(),
  name: z.string().min(1)
})

export const POST = async (req: NextRequest) => {
  try {
    const isRights = await validateRights('rename')
    if (!isRights) {
      return NextResponse.json(
        { error: '401 Unauthorized' },
        {
          status: 401
        }
      )
    }

    const body = await req.json()

    const { examId, name } = RenameExamBody.parse(body)

    if (!name) {
      return NextResponse.json(
        { error: `name missing` },
        {
          status: 400
        }
      )
    }

    const oldName = await getExamFileNameById(examId)

    if (oldName === null) {
      return NextResponse.json(
        { error: `exam not found` },
        {
          status: 404
        }
      )
    }

    const updatedExam = await renameExamFile(examId, name)
    if (updatedExam === null) {
      console.error(
        new Error(`Exam renaming didn't update any exams! Exam ID: ${examId}`)
      )
      return NextResponse.json(
        { error: '500 Internal Server Error' },
        {
          status: 500
        }
      )
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
      await renameExamFile(examId, oldName.fileName)
      console.error('S3 rename failed!', e)
      throw e
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Error while renaming exam', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
