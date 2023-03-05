'use client'
import { MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

interface RenameCourseProps {
  currentName: string
  examId: number
}

const RenameCourse = ({ currentName, examId }: RenameCourseProps) => {
  const router = useRouter()

  const renameExam = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newName = prompt(
      `Please enter the new filename for this exam:`,
      currentName
    )
    if (!newName) {
      return
    }

    const request = await fetch(`/api/exam/rename`, {
      method: 'POST',
      body: JSON.stringify({ examId, name: newName }),
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
      <button className="exam-list-item__rename-button" onClick={renameExam}>
        rename
      </button>
    </>
  )
}

export default RenameCourse
