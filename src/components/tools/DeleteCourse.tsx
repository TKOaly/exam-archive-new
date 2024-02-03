import { redirect } from 'next/navigation'

import { urlForCourseListing } from '@lib/courses'
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
      const isRights = await validateRights('upload')
      if (!isRights) {
        throw new Error('Unauthorized')
      }

      const courseId = parseInt(formData.get('courseId') as string, 10) // TODO: make better type check

      const deletedCourse = await deleteCourse(courseId)
    } catch (e) {
      console.error(e)
      return
    }
    redirect(urlForCourseListing())
  }

  const isRights = await validateRights('remove')

  if (!isRights) {
    return null
  }

  return (
    <form action={handleDeleteCourse} aria-labelledby="deleteCourseTitle">
      <div className="flex flex-col gap-2">
        <h3
          id="deleteCourseTitle"
          className="font-serif text-xl font-bold leading-tight"
        >
          Delete course
        </h3>
        <p>Course can only be deleted after all files have been deleted.</p>
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
