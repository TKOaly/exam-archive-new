import { redirect } from 'next/navigation'

import { urlForCourse } from '@lib/courses'
import { ExamFile, ExamName } from '@lib/types'
import { getExamFileNameById, renameExamFile } from '@services/archive'
import { validateRights } from '@services/tkoUserService'

import Button from '@components/Button'
import Input from '@components/Input'

interface RenameExamProps {
  currentName: string
  currentType: string
  examId: number
}

const RenameExam = async ({
  currentName,
  currentType,
  examId
}: RenameExamProps) => {
  const handleRenameExam = async (formData: FormData) => {
    'use server'
    const isRights = await validateRights('rename')
    if (!isRights) {
      return `Unauthorized`
    }

    const body = ExamFile.safeParse({
      examId: formData.get('examId'),
      examName: formData.get('examName'),
      type: formData.get('type')
    })
    if (!body.success) {
      return 'Invalid exam parameters'
    }

    const { examId, examName, type } = body.data

    const info = await getExamFileNameById(examId)
    if (!info) {
      return `Exam not found`
    }

    if (examName === currentName && type === currentType) {
      return 'No changes needed'
    }

    await renameExamFile(examId, type, examName)
    redirect(urlForCourse(info.courseId, info.courseName))
  }

  const isRights = await validateRights('rename')

  if (!isRights) {
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
        <div className="flex flex-col">
          <p>Select type:</p>
          <select
            name="type"
            className="my-2 box-border w-full p-3 shadow-lg ring ring-inset ring-gray-800 focus:ring-gray-400 lg:w-1/2"
            defaultValue={currentType}
          >
            <option value="exam">Exam</option>
            <option value="notes">Lecture notes</option>
            <option value="exercise">Exercise</option>
            <option value="other">Other</option>
          </select>
        </div>
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
