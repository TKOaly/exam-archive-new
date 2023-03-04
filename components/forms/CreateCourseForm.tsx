'use client'
import { useState, MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

import { urlForCourse } from '@utilities/courses'

const CreateCourseForm = () => {
  const [courseName, setCourseName] = useState('')
  const router = useRouter()

  const createCourse = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const request = await fetch('/api/course/create', {
      method: 'POST',
      body: JSON.stringify({ courseName })
    })

    const response = await request.json()

    if (!request.ok) {
      alert(response.error)
      return
    }
    router.push(urlForCourse(response.id, response.name))
  }

  return (
    <div className="create-course-form">
      <h3>Add a new course:</h3>
      <input
        className="create-course-form__name"
        aria-label="Course name"
        placeholder="Course name"
        type="text"
        onChange={e => setCourseName(e.target.value)}
      ></input>
      <button
        className="create-course-form__submit"
        type="submit"
        name="create"
        value="Create course"
        onClick={createCourse}
      >
        Create course
      </button>
    </div>
  )
}

export default CreateCourseForm
