import { redirect } from 'next/navigation'

import { urlForCourse } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { deleteExam, findCourseByExamId } from '@services/archive'
import { validateRights } from '@services/tkoUserService'

import Button from '@components/Button'

interface DeleteExamProps {
  examId: number
  fileName: string
}

const DeleteExam = async ({ examId, fileName }: DeleteExamProps) => {
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

    redirect(urlForCourse(course.id, course.name))
  }

  const { rights } = await getSession()

  if (!rights.remove) {
    return null
  }

  return (
    <form action={handleDeleteExam}>
      <div className="flex flex-col gap-2">
        <p className="font-serif text-xl font-bold leading-tight">
          Delete exam
        </p>
        <input hidden name="examId" defaultValue={examId} />
        <Button
          type="submit"
          name="deleteExam"
          title={`Delete exam "${fileName}"`}
          text={`Delete exam`}
          className="w-fit text-left"
        />
      </div>
    </form>
  )
}

export default DeleteExam
