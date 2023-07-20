import { redirect } from 'next/navigation'

import { urlForCourse } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { ExamName } from '@lib/types'
import { getExamFileNameById, renameExamFile } from '@services/archive'
import { validateRights } from '@services/tkoUserService'

import Button from '@components/Button'
import Input from '@components/Input'

interface RenameExamProps {
  currentName: string
  examId: number
}

const RenameExam = async ({ currentName, examId }: RenameExamProps) => {
  const handleRenameExam = async (formData: FormData) => {
    'use server'
    const { rights } = await getSession()

    const isRights = validateRights(rights, 'rename')
    if (!isRights) {
      return `Unauthorized`
    }

    const body = ExamName.safeParse(formData.get('examName'))
    if (!body.success) {
      return 'Invalid exam name'
    }

    const examId = parseInt(formData.get('examId') as string, 10) // TODO: make better type check
    if (isNaN(examId)) {
      return 'Invalid exam id'
    }

    const info = await getExamFileNameById(examId)
    if (!info) {
      return `Exam not found`
    }

    if (body.data === currentName) {
      return 'No changes needed'
    }

    await renameExamFile(examId, body.data)
    redirect(urlForCourse(info.courseId, info.courseName))
  }

  const { rights } = await getSession()

  if (!rights.rename) {
    return null
  }

  return (
    <form action={handleRenameExam}>
      <div className="flex flex-col gap-2">
        <p className="font-serif text-xl font-bold leading-tight">
          Rename exam
        </p>
        <Input
          name="examName"
          title={`Give new name for exam "${currentName}"`}
          defaultValue={currentName}
          className="w-full lg:w-1/2"
        />
        <input hidden name="examId" defaultValue={examId} />
        <Button
          type="submit"
          name="renameExam"
          title={`Rename exam "${currentName}"`}
          text={`Rename exam`}
          className="w-fit text-left"
        />
      </div>
    </form>
  )
}

export default RenameExam
