'use client'
import { useState, MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

interface UploadExamFormProps {
  courseId: number
}

const UploadExamForm = ({ courseId }: UploadExamFormProps) => {
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()

  const uploadExam = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!file) {
      alert('Please select a file to upload')
      return
    }

    const body = new FormData()
    body.append('file', file)
    body.append('courseId', courseId.toString())

    const request = await fetch('/api/exam/upload', {
      method: 'POST',
      body
    })

    const response = await request.json()

    if (!request.ok) {
      alert(response.error)
      return
    }

    router.refresh()
  }

  return (
    <div className="exam-upload-form">
      <h3>Upload a new file here:</h3>
      <input
        className="exam-upload-form__file"
        onChange={e => {
          if (!e.target.files) return
          setFile(e.target.files[0])
        }}
        aria-label="File"
        type="file"
        name="file"
      />
      <button
        className="exam-upload-form__submit"
        type="submit"
        name="upload"
        value="Upload"
        onClick={uploadExam}
      >
        Upload
      </button>
    </div>
  )
}

export default UploadExamForm
