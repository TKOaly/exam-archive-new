import { revalidatePath } from 'next/cache'
import { urlForCourse } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { deleteExam, findCourseByExamId } from '@services/archive'
import { validateRights } from '@services/tkoUserService'

interface DeleteExamProps {
  examId: number
  fileName: string
}

const DeleteExam = ({ examId, fileName }: DeleteExamProps) => {
  const handleDeleteExam = async (formData: FormData) => {
    'use server'
    const { rights } = await getSession()

    const isRights = validateRights(rights, 'remove')
    if (!isRights) {
      return `Unauthorized`
    }

    const examId = parseInt(formData.get('examId') as string, 10) // TODO: make better type check

    const course = await findCourseByExamId(examId)

    if (!course) {
      return 'Exam does not exist.'
    }

    await deleteExam(examId)

    revalidatePath(urlForCourse(course.id, course.name))
  }

  return (
    <div className="delete-exam-form">
      <h3>Delete exam</h3>
      <form action={handleDeleteExam}>
        <input hidden name="examId" value={examId} />
        <button
          className="delete-exam-button__button"
          aria-label={`Delete exam "${fileName}"`}
          title={`Delete exam "${fileName}"`}
          type="submit"
        >
          Delete exam
        </button>
      </form>
    </div>
  )
}

export default DeleteExam
