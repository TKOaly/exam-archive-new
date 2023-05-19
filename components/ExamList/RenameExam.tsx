import { urlForCourse } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { ExamName } from '@lib/types'
import { getExamFileNameById, renameExamFile } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { revalidatePath } from 'next/cache'

interface RenameCourseProps {
  currentName: string
  examId: number
}

const RenameCourse = ({ currentName, examId }: RenameCourseProps) => {
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
          name="examName"
          className="rename-course-form__name"
          aria-label="Exam name"
          type="text"
          defaultValue={currentName}
        ></input>
        <input hidden name="examId" value={examId} />
        <button
          className="rename-course-form__submit"
          type="submit"
          name="rename"
          value="rename"
        >
          Rename exam
        </button>
      </form>
    </div>
  )
}

export default RenameCourse
