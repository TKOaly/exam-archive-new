import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3'
import contentDisposition from 'content-disposition'
import { randomUUID as uuidv4 } from 'crypto'
import { transliterate } from 'transliteration'

import { redirect } from 'next/navigation'

import configs from '@lib/config'
import { urlForCourse } from '@lib/courses'
import { getCourseInfo, createFile } from '@services/archive'
import s3 from '@services/s3'
import { validateRights } from '@services/tkoUserService'

import Button from '@components/Button'

interface UploadFileProps {
  courseId: number
}

const UploadFiles = async ({ courseId }: UploadFileProps) => {
  const uploadFiles = async (formData: FormData) => {
    'use server'
    const isRights = await validateRights('upload')
    if (!isRights) {
      return 'Unauthorized'
    }
    const type = formData.get('type') as string
    const courseId = parseInt(formData.get('courseId') as string, 10) // TODO: make better type check

    const course = await getCourseInfo(courseId)
    if (course === null) {
      return 'Cannot upload a file to a course that does not exist.'
    }

    const files = [...formData.values()]
      .filter(entry => entry instanceof File)
      .map(entry => entry as File)

    const uploadedFiles = await Promise.all(
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

        const createdFile = await createFile({
          type: type,
          courseId: course.id,
          fileName: originalFilename,
          filePath: params.Key as string,
          mimeType: contentType
        })

        return createdFile
      })
    )
    redirect(urlForCourse(course.id, course.name))
  }

  const isRights = await validateRights('upload')
  if (!isRights) {
    return null
  }

  return (
    <form action={uploadFiles}>
      <div className="flex flex-col gap-2">
        <p className="font-serif text-xl font-bold leading-tight">
          Upload a new file here
        </p>
        <div className="flex flex-col">
          <p>Select type:</p>
          <select
            name="type"
            className="my-2 box-border w-full p-3 shadow-lg ring ring-inset ring-gray-800 focus:ring-gray-400 lg:w-1/2"
          >
            <option value="exam">Exam</option>
            <option value="notes">Lecture notes</option>
            <option value="exercise">Exercise</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input
          type="file"
          name="files"
          aria-label="Select files to upload"
          title="Select files to upload"
          multiple
          className="my-2 box-border file:box-border file:cursor-pointer file:border-0 file:bg-transparent file:p-3 file:font-serif file:lowercase file:text-gray-800 file:shadow-lg file:ring file:ring-inset file:ring-gray-800 hover:file:bg-gray-600 hover:file:text-white focus:file:ring-gray-400"
        />
        <input hidden name="courseId" defaultValue={courseId} />
        <Button
          type="submit"
          name="uploadFile"
          title={`Upload files`}
          text={`Upload`}
          className="w-fit text-left"
        />
      </div>
    </form>
  )
}

export default UploadFiles
