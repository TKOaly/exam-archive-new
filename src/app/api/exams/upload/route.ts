import { NextRequest, NextResponse } from 'next/server'
import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3'
import contentDisposition from 'content-disposition'
import { randomUUID as uuidv4 } from 'crypto'
import { transliterate } from 'transliteration'

import { getCourseInfo, createExam } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import s3 from '@services/s3'
import configs from '@lib/config'

export const POST = async (req: NextRequest) => {
  try {
    const isRights = await validateRights('upload')
    if (!isRights) {
      return NextResponse.json(
        { error: '401 Unauthorized' },
        {
          status: 401
        }
      )
    }

    const body = await req.formData()
    const courseId = parseInt(body.get('courseId') as string, 10)

    const course = await getCourseInfo(courseId)
    if (course === null) {
      return NextResponse.json(
        { error: `Cannot upload a file to a course that does not exist.` },
        {
          status: 404
        }
      )
    }

    const files = [...body.values()]
      .filter(entry => entry instanceof File)
      .map(entry => entry as File)

    const exams = await Promise.all(
      files.map(async file => {
        const originalFilename = file.name as string
        const contentType = file.type as string

        const params: PutObjectCommandInput = {
          Bucket: configs.AWS_S3_BUCKET_ID,
          Key: uuidv4(),
          ContentDisposition: contentDisposition(originalFilename, {
            type: 'inline',
            fallback: transliterate(originalFilename)
          }),
          ContentType: contentType,
          ACL: 'private',
          ContentLength: file.size,
          Body: Buffer.from(await file.arrayBuffer())
        }

        await s3.send(new PutObjectCommand(params))

        const exam = await createExam({
          courseId: course.id,
          fileName: originalFilename,
          filePath: params.Key as string,
          mimeType: contentType
        })
        return exam
      })
    )

    return NextResponse.json(exams)
  } catch (e) {
    console.error('Error while uploading exam', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
