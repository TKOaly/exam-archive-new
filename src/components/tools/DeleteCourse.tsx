import { redirect } from 'next/navigation'

import { urlForCourseListing } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { deleteCourse } from '@services/archive'
import { validateRights } from '@services/tkoUserService'

import Button from '@components/Button'

interface DeleteCourseProps {
  courseId: number
  courseName: string
}

const DeleteCourse = async ({ courseId, courseName }: DeleteCourseProps) => {
  const handleDeleteCourse = async (formData: FormData) => {
    'use server'
    try {
      const { rights } = await getSession()

      const isRights = validateRights(rights, 'upload')
      if (!isRights) {
        return `Unauthorized`
      }

      const courseId = parseInt(formData.get('courseId') as string, 10) // TODO: make better type check

      const deletedCourse = await deleteCourse(courseId)
    } catch (e) {
      console.error(e)
      return
    }
    redirect(urlForCourseListing())
  }

  const { rights } = await getSession()

  if (!rights.remove) {
    return null
  }

  return (
    <form action={handleDeleteCourse}>
      <div className="flex flex-col gap-2">
        <p className="font-serif text-xl font-bold leading-tight">
          Delete course
        </p>
        <p>Course can only be deleted after all exams have been deleted.</p>
        <input hidden name="courseId" defaultValue={courseId} />
        <Button
          type="submit"
          name="deleteCourse"
          title={`Delete course "${courseName}"`}
          text={`Delete course`}
          className="w-fit text-left"
        />
      </div>
    </form>
  )
}

export default DeleteCourse
