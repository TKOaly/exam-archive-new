import { notFound, redirect } from 'next/navigation'

import { getSession } from '@lib/sessions'
import { getExamFileNameById } from '@services/archive'

import RenameExam from '@components/tools/RenameExam'
import DeleteExam from '@components/tools/DeleteExam'

const Page = async ({
  params
}: {
  params: { examId: string; fileName: string }
}) => {
  const { rights } = await getSession()

  if (!rights.rename || !rights.remove) {
    redirect('/')
  }

  const examId = parseInt(params.examId, 10)

  const exam = await getExamFileNameById(parseInt(params.examId))

  if (!exam) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-8 pb-5">
      <RenameExam examId={examId} currentName={exam.fileName} />
      <DeleteExam examId={examId} fileName={exam.fileName} />
    </div>
  )
}

export default Page
