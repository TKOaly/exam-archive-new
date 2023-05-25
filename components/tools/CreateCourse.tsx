import { redirect } from 'next/navigation'

import { validateRights } from '@services/tkoUserService'
import { findCourseByName, createCourse } from '@services/archive'
import { urlForCourse } from '@lib/courses'
import { CourseName } from '@lib/types'
import { getSession } from '@lib/sessions'

const CreateCourse = async () => {
  const handleCourseCreation = async (formData: FormData) => {
    'use server'
    const { rights } = await getSession()

    const isRights = validateRights(rights, 'upload')
    if (!isRights) {
      return `Unauthorized`
    }

    const body = CourseName.safeParse(formData.get('courseName'))
    if (!body.success) {
      return 'Invalid course name'
    }

    const existingCourse = await findCourseByName(body.data.trim())
    if (existingCourse) {
      return `Course ${existingCourse.name} already exists!`
    }

    const createdCourse = await createCourse({ name: body.data })

    redirect(urlForCourse(createdCourse.id, createdCourse.name))
  }

  const { rights } = await getSession()

  if (!rights.upload) {
    return null
  }

  return (
    <div className="create-course-form">
      <h3>Add a new course:</h3>
      <form action={handleCourseCreation}>
        <input
          type="text"
          className="create-course-form__name"
          name="courseName"
          aria-label={`Give name for new course`}
          title={`Give name for new course`}
          placeholder="Course name"
        ></input>
        <button
          type="submit"
          className="create-course-form__submit"
          name="createCourse"
          aria-label={`Create course`}
          title={`Create course`}
        >
          Create course
        </button>
      </form>
    </div>
  )
}

export default CreateCourse
