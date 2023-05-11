'use client'
import { MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

import { urlForCourseListing } from '@lib/courses'

interface DeleteCourseProps {
  courseId: number
}

const DeleteCourse = ({ courseId }: DeleteCourseProps) => {
  const router = useRouter()

  const deleteCourse = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const request = await fetch(`/api/course/delete`, {
      method: 'POST',
      body: JSON.stringify({ courseId }),
      credentials: 'same-origin'
    })

    const response = await request.json()

    if (!request.ok) {
      alert(response.error)
      return
    }

    router.push(urlForCourseListing())
  }

  return (
    <>
      <h3>Delete course</h3>
      <p>Course can only be deleted after all exams have been deleted.</p>
      <button onClick={deleteCourse}>delete</button>
    </>
  )
}

export default DeleteCourse
