import { redirect } from 'next/navigation'

import { urlForCourse } from '@lib/courses'
import { CourseName } from '@lib/types'
import { validateRights } from '@services/tkoUserService'
import { findCourseByName, createCourse } from '@services/archive'

import Input from '@components/Input'
import Button from '@components/Button'

const CreateCourse = async () => {
  const handleCourseCreation = async (formData: FormData) => {
    'use server'
    const isRights = await validateRights('upload')
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

  const isRights = await validateRights('upload')

  if (!isRights) {
    return null
  }

  return (
    <form action={handleCourseCreation}>
      <div className="flex flex-col gap-2">
        <p className="font-serif text-xl font-bold leading-tight">
          Add a new course
        </p>
        <Input
          name="courseName"
          title={`Give name for new course`}
          placeholder="Course name"
          className="w-full lg:w-1/2"
        />
        <Button
          type="submit"
          name="createCourse"
          title="Create course"
          className="w-fit text-left"
        />
      </div>
    </form>
  )
}

export default CreateCourse
