'use client'
import { MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

interface RenameCourseProps {
  currentName: string
  courseId: number
}

const RenameCourse = ({ currentName, courseId }: RenameCourseProps) => {
  const router = useRouter()

  const renameCourse = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newName = prompt(
      `Please enter the new name for this course:`,
      currentName
    )
    if (!newName) {
      return
    }

    const request = await fetch(`/api/course/rename`, {
      method: 'POST',
      body: JSON.stringify({ courseId, name: newName }),
      credentials: 'same-origin'
    })

    const response = await request.json()

    if (!request.ok) {
      alert(response.error)
      return
    }

    router.refresh()
  }

  return (
    <>
      <h3>Rename course</h3>
      <button onClick={renameCourse}>rename</button>
    </>
  )
}

export default RenameCourse
