import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3'
import contentDisposition from 'content-disposition'
import { randomUUID as uuidv4 } from 'crypto'
import { transliterate } from 'transliteration'

import { redirect } from 'next/navigation'

import configs from '@lib/config'
import { urlForCourse } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { getCourseInfo, createExam } from '@services/archive'
import s3 from '@services/s3'
import { validateRights } from '@services/tkoUserService'

import Button from '@components/Button'

interface UploadExamProps {
  courseId: number
}

const UploadExam = async ({ courseId }: UploadExamProps) => {
  const uploadExam = async (formData: FormData) => {
    'use server'
    const { rights } = await getSession()

    const isRights = validateRights(rights, 'upload')
    if (!isRights) {
      return 'Unauthorized'
    }
    const courseId = parseInt(formData.get('courseId') as string, 10) // TODO: make better type check

    const course = await getCourseInfo(courseId)
    if (course === null) {
      return 'Cannot upload a file to a course that does not exist.'
    }

    const files = [...formData.values()]
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
    redirect(urlForCourse(course.id, course.name))
  }

  const { rights } = await getSession()
  if (!rights.upload) {
    return null
  }

  return (
    <form action={uploadExam}>
      <div className="flex flex-col gap-2">
        <p className="font-serif text-xl font-bold leading-tight">
          Upload a new file here
        </p>
        <input
          type="file"
          name="file"
          aria-label="Select files to upload"
          title="Select files to upload"
          multiple
          className="my-2 box-border file:box-border file:cursor-pointer file:border-0 file:bg-transparent file:p-3 file:font-serif file:lowercase file:text-gray-800 file:shadow-lg file:ring file:ring-inset file:ring-gray-800 hover:file:bg-gray-600 hover:file:text-white focus:file:ring-gray-400"
        />
        <input hidden name="courseId" defaultValue={courseId} />
        <Button
          type="submit"
          name="uploadExam"
          title={`Upload exam`}
          text={`Upload`}
          className="w-fit text-left"
        />
      </div>
    </form>
  )
}

export default UploadExam
