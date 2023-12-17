import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import contentDisposition from 'content-disposition'
import { transliterate } from 'transliteration'

import { getFileNameById, updateFile } from '@services/archive'
import configs from '@lib/config'
import s3 from '@services/s3'
import { validateRights } from '@services/tkoUserService'

const UpdateFileBody = z.object({
  fileId: z.number(),
  type: z.string().regex(/exam|notes|exercise|other/),
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

    const { fileId, type, name } = UpdateFileBody.parse(body)

    if (!name) {
      return NextResponse.json(
        { error: `Name missing` },
        {
          status: 400
        }
      )
    }

    if (!type) {
      return NextResponse.json(
        { error: `Type missing` },
        {
          status: 400
        }
      )
    }

    const oldName = await getFileNameById(fileId)

    if (oldName === null) {
      return NextResponse.json(
        { error: `File not found` },
        {
          status: 404
        }
      )
    }

    const updatedFile = await updateFile(fileId, type, name)
    if (updatedFile === null) {
      console.error(
        new Error(`File updating didn't update any files! File ID: ${fileId}`)
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
    const s3key = updatedFile.filePath
    try {
      await s3.copyObject({
        CopySource: `${configs.AWS_S3_BUCKET_ID}/${s3key}`,
        Bucket: configs.AWS_S3_BUCKET_ID,
        Key: s3key,
        ACL: 'private',
        ContentType: updatedFile.mimeType,
        ContentDisposition: contentDisposition(updatedFile.fileName, {
          type: 'inline',
          fallback: transliterate(updatedFile.fileName)
        }),
        MetadataDirective: 'REPLACE'
      })
    } catch (e) {
      // s3 failed! revert!
      await updateFile(fileId, type, oldName.fileName)
      console.error('S3 rename failed!', e)
      throw e
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Error while renaming file', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
