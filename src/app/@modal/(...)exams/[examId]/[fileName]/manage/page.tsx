import { notFound, redirect } from 'next/navigation'

import { getSession } from '@lib/sessions'
import { getExamFileNameById } from '@services/archive'

import Modal from '@components/Modal'
import DeleteExam from '@components/tools/DeleteExam'
import RenameExam from '@components/tools/RenameExam'

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
    <Modal title={`Manage exam "${exam.fileName}"`}>
      <div className="flex flex-col gap-8">
        <RenameExam examId={examId} currentName={exam.fileName} />
        <DeleteExam examId={examId} fileName={exam.fileName} />
      </div>
    </Modal>
  )
}

export default Page
