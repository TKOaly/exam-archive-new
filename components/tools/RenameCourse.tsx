import { validateRights } from '@services/tkoUserService'
import { CourseName } from '@lib/types'
import {
  findCourseByName,
  getCourseInfo,
  renameCourse
} from '@services/archive'
import { revalidatePath } from 'next/cache'
import { urlForCourse } from '@lib/courses'
import { getSession } from '@lib/sessions'

interface RenameCourseProps {
  currentName: string
  courseId: number
}

const RenameCourse = async ({ currentName, courseId }: RenameCourseProps) => {
  const handleRenameCourse = async (formData: FormData) => {
    'use server'
    const { rights } = await getSession()

    const isRights = validateRights(rights, 'rename')
    if (!isRights) {
      return `Unauthorized`
    }

    const body = CourseName.safeParse(formData.get('courseName'))
    if (!body.success) {
      return 'Invalid course name'
    }

    const courseId = parseInt(formData.get('courseId') as string, 10) // TODO: make better type check
    const course = await getCourseInfo(courseId)
    if (!course) {
      return 'Course not found'
    }

    if (body.data === course.name) {
      return 'No changes needed'
    }

    const existingCourse = await findCourseByName(body.data.trim())
    if (existingCourse) {
      return `Course ${existingCourse.name} already exists!`
    }

    const renamedCourse = await renameCourse(course.id, body.data)
    revalidatePath(urlForCourse(renamedCourse.id, renamedCourse.name))
  }

  const { rights } = await getSession()
  if (!rights.rename) {
    return null
  }

  return (
    <div className="rename-course-form">
      <h3>Rename course</h3>
      <form action={handleRenameCourse}>
        <input
          type="text"
          className="rename-course-form__name"
          name="courseName"
          aria-label={`Give new name for course "${currentName}"`}
          title={`Give new name for course "${currentName}"`}
          defaultValue={currentName}
        ></input>
        <input hidden name="courseId" defaultValue={courseId} />
        <button
          type="submit"
          className="rename-course-form__submit"
          name="renameCourse"
          aria-label={`Rename course "${currentName}"`}
          title={`Rename course "${currentName}"`}
        >
          Rename course
        </button>
      </form>
    </div>
  )
}

export default RenameCourse
