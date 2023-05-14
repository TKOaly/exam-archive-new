import { redirect } from 'next/navigation'

import { getSession, validateRights } from '@services/tkoUserService'
import { findCourseByName, createCourse } from '@services/archive'
import { urlForCourse } from '@lib/courses'
import { CourseName } from '@lib/types'

const CreateCourse = () => {
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

  return (
    <div className="create-course-form">
      <h3>Add a new course:</h3>
      <form action={handleCourseCreation}>
        <input
          name="courseName"
          className="create-course-form__name"
          aria-label="Course name"
          placeholder="Course name"
          type="text"
        ></input>
        <button
          className="create-course-form__submit"
          type="submit"
          name="create"
          value="Create course"
        >
          Create course
        </button>
      </form>
    </div>
  )
}

export default CreateCourse
