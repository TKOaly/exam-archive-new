import { redirect } from 'next/navigation'
import contentDisposition from 'content-disposition'
import { transliterate } from 'transliteration'

import configs from '@lib/config'
import { urlForCourse } from '@lib/courses'
import { UpdateFileInfo } from '@lib/types'
import { getFileNameById, updateFile } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import s3 from '@services/s3'

import Button from '@components/Button'
import Input from '@components/Input'

interface UpdateFileProps {
  currentName: string
  currentType: string
  fileId: number
}

const UpdateFile = async ({
  currentName,
  currentType,
  fileId
}: UpdateFileProps) => {
  const handleUpdateFile = async (formData: FormData) => {
    'use server'
    const isRights = await validateRights('rename')
    if (!isRights) {
      return `Unauthorized`
    }

    const body = UpdateFileInfo.safeParse({
      fileId: formData.get('fileId'),
      fileName: formData.get('fileName'),
      type: formData.get('type')
    })
    if (!body.success) {
      return 'Invalid file parameters'
    }

    const { fileId, fileName, type } = body.data

    const info = await getFileNameById(fileId)
    if (!info) {
      return `File not found`
    }

    if (fileName === currentName && type === currentType) {
      return 'No changes needed'
    }

    const updatedFile = await updateFile(fileId, type, fileName)

    if (updatedFile === null) {
      return 'Failed to update file'
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
      await updateFile(fileId, type, currentName)
      return 'Failed to rename in S3 '
    }

    redirect(urlForCourse(info.courseId, info.courseName))
  }

  const isRights = await validateRights('rename')

  if (!isRights) {
    return null
  }

  return (
    <form action={handleUpdateFile}>
      <div className="flex flex-col gap-2">
        <p className="font-serif text-xl font-bold leading-tight">
          Manage file
        </p>
        <div className="flex flex-col">
          <p>Filename:</p>
          <Input
            name="fileName"
            title={`Give new name for file "${currentName}"`}
            defaultValue={currentName}
            className="w-full lg:w-1/2"
          />
        </div>
        <div className="flex flex-col">
          <p>Select type:</p>
          <select
            name="type"
            className="my-2 box-border w-full bg-transparent p-3 shadow-lg ring ring-inset ring-gray-800 focus:ring-gray-400 lg:w-1/2"
            defaultValue={currentType}
          >
            <option value="exam">Exam</option>
            <option value="notes">Lecture notes</option>
            <option value="exercise">Exercise</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input hidden name="fileId" defaultValue={fileId} />
        <Button
          type="submit"
          name="renameFile"
          title={`Save file "${currentName}"`}
          text={`Save file`}
          className="w-fit text-left"
        />
      </div>
    </form>
  )
}

export default UpdateFile
