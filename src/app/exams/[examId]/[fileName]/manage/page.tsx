import { notFound, redirect } from 'next/navigation'

import { getExamFileNameById } from '@services/archive'

import RenameExam from '@components/tools/RenameExam'
import DeleteExam from '@components/tools/DeleteExam'
import { validateRights } from '@services/tkoUserService'

const Page = async ({
  params
}: {
  params: { examId: string; fileName: string }
}) => {
  const isRights = await validateRights('rename', 'remove')

  if (!isRights) {
    redirect('/')
  }

  const examId = parseInt(params.examId, 10)

  const exam = await getExamFileNameById(parseInt(params.examId))

  if (!exam) {
    notFound()
  }

  return (
    <div className="content-container flex flex-col gap-8 pb-5">
      <RenameExam
        examId={examId}
        currentName={exam.fileName}
        currentType={exam.type}
      />
      <DeleteExam examId={examId} fileName={exam.fileName} />
    </div>
  )
}

export default Page
