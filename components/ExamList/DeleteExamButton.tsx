import { urlForCourse } from '@lib/courses'
import { deleteExam, findCourseByExamId } from '@services/archive'
import { getSession, validateRights } from '@services/tkoUserService'
import { revalidatePath } from 'next/cache'

interface DeleteExamProps {
  examId: number
  fileName: string
}

const DeleteExamButton = ({ examId, fileName }: DeleteExamProps) => {
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
    <div className="delete-exam-button">
      <form action={handleDeleteExam}>
        <input hidden name="examId" value={examId} />
        <button
          className="delete-exam-button__button"
          aria-label={`Delete exam "${fileName}"`}
          title={`Delete exam "${fileName}"`}
          type="submit"
        >
          <img aria-hidden="true" src="/img/delete.png" alt="Delete" />
        </button>
      </form>
    </div>
  )
}

export default DeleteExamButton
