import { redirect } from 'next/navigation'

import { urlForCourse } from '@lib/courses'
import { deleteFile, findCourseByFileId } from '@services/archive'
import { validateRights } from '@services/tkoUserService'

import Button from '@components/Button'

interface DeleteFileProps {
  fileId: number
  fileName: string
}

const DeleteFile = async ({ fileId, fileName }: DeleteFileProps) => {
  const handleDeleteFile = async (formData: FormData) => {
    'use server'
    const isRights = await validateRights('remove')
    if (!isRights) {
      throw new Error('Unauthorized')
    }

    const fileId = parseInt(formData.get('fileId') as string, 10) // TODO: make better type check

    const course = await findCourseByFileId(fileId)

    if (!course) {
      return 'File does not exist.'
    }

    await deleteFile(fileId)

    redirect(urlForCourse(course.id, course.name))
  }

  const isRights = await validateRights('remove')

  if (!isRights) {
    return null
  }

  return (
    <form action={handleDeleteFile} aria-labelledby="deleteFileTitle">
      <div className="flex flex-col gap-2">
        <h3
          id="deleteFileTitle"
          className="font-serif text-xl font-bold leading-tight"
        >
          Delete file
        </h3>
        <input hidden name="fileId" defaultValue={fileId} />
        <Button
          type="submit"
          name="deleteFile"
          title={`Delete file "${fileName}"`}
          text={`Delete file`}
          className="w-fit text-left"
        />
      </div>
    </form>
  )
}

export default DeleteFile
