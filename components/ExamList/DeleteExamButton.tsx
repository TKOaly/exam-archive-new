'use client'
import { MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

interface DeleteExamProps {
  examId: number
  fileName: string
}

const DeleteExamButton = ({ examId, fileName }: DeleteExamProps) => {
  const router = useRouter()

  const deleteExam = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!confirm('Are you sure you want to delete this exam?')) {
      return
    }

    const request = await fetch(`/api/exam/delete`, {
      method: 'POST',
      body: JSON.stringify({ examId }),
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
    <div className="delete-exam-button">
      <button
        className="delete-exam-button__button"
        aria-label={`Delete exam "${fileName}"`}
        title={`Delete exam "${fileName}"`}
        onClick={deleteExam}
      >
        <img aria-hidden="true" src="/static/img/delete.png" alt="Delete" />
      </button>
    </div>
  )
}

export default DeleteExamButton
