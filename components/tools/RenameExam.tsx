import { urlForCourse } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { ExamName } from '@lib/types'
import { getExamFileNameById, renameExamFile } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { revalidatePath } from 'next/cache'

interface RenameExamProps {
  currentName: string
  examId: number
}

const RenameExam = ({ currentName, examId }: RenameExamProps) => {
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
    revalidatePath(urlForCourse(info.courseId, info.courseName))
  }

  return (
    <div className="rename-exam-form">
      <h3>Rename exam</h3>
      <form action={handleRenameExam}>
        <input
          type="text"
          className="rename-exam-form__name"
          name="examName"
          aria-label={`Give new name for exam "${currentName}"`}
          title={`Give new name for exam "${currentName}"`}
          defaultValue={currentName}
        ></input>
        <input hidden name="examId" defaultValue={examId} />
        <button
          type="submit"
          className="rename-exam-form__submit"
          name="renameExam"
          aria-label={`Rename exam "${currentName}"`}
          title={`Rename exam "${currentName}"`}
        >
          Rename exam
        </button>
      </form>
    </div>
  )
}

export default RenameExam
