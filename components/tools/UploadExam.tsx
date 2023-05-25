import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3'
import { getCourseInfo, createExam } from '@services/archive'
import s3 from '@services/s3'
import { validateRights } from '@services/tkoUserService'
import contentDisposition from 'content-disposition'
import { randomUUID as uuidv4 } from 'crypto'
import { transliterate } from 'transliteration'
import configs from '@lib/config'
import { urlForCourse } from '@lib/courses'
import { revalidatePath } from 'next/cache'
import { getSession } from '@lib/sessions'

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
    revalidatePath(urlForCourse(course.id, course.name))
  }

  const { rights } = await getSession()
  if (!rights.upload) {
    return null
  }

  return (
    <div className="exam-upload-form">
      <h3>Upload a new file here:</h3>
      <form action={uploadExam}>
        <input
          type="file"
          className="exam-upload-form__file"
          name="file"
          aria-label="Select files to upload"
          title="Select files to upload"
          multiple
        />
        <input hidden name="courseId" defaultValue={courseId} />
        <button
          type="submit"
          className="exam-upload-form__submit"
          name="uploadExam"
          aria-label="Upload exam"
          title="Upload exam"
        >
          Upload
        </button>
      </form>
    </div>
  )
}

export default UploadExam
