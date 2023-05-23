import { redirect } from 'next/navigation'
import { urlForCourseListing } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { deleteCourse } from '@services/archive'
import { validateRights } from '@services/tkoUserService'

interface DeleteCourseProps {
  courseId: number
  courseName: string
}

const DeleteCourse = ({ courseId, courseName }: DeleteCourseProps) => {
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

  return (
    <div className="delete-course-form">
      <h3>Delete course</h3>
      <p>Course can only be deleted after all exams have been deleted.</p>
      <form action={handleDeleteCourse}>
        <input hidden name="courseId" defaultValue={courseId} />
        <button
          type="submit"
          className="delete-course-form__submit"
          name="deleteCourse"
          aria-label={`Delete course "${courseName}"`}
          title={`Delete course "${courseName}"`}
        >
          Delete course
        </button>
      </form>
    </div>
  )
}

export default DeleteCourse
