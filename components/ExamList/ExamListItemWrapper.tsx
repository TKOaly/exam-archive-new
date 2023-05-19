import React from 'react'

import DeleteExamButton from '@components/ExamList/DeleteExamButton'
import RenameExam from '@components/ExamList/RenameExam'

interface ExamListItemWrapperProps {
  children: React.ReactNode
  examId: number
  fileName: string
  showDelete: boolean
  showRename: boolean
}

const ExamListItemWrapper = ({
  children,
  examId,
  fileName,
  showDelete,
  showRename
}: ExamListItemWrapperProps) => {
  if (!showDelete && !showRename) {
    return <>{children}</>
  }

  return (
    <details key={examId} data-exam-id={examId} data-exam-name={fileName}>
      <summary className="exam-list-item__summary">{children}</summary>
      <div className="exam-list-item__manage-container">
        {showRename && <RenameExam currentName={fileName} examId={examId} />}
        {showDelete && <DeleteExamButton fileName={fileName} examId={examId} />}
      </div>
    </details>
  )
}

export default ExamListItemWrapper
