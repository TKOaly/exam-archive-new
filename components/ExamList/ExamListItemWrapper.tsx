import React from 'react'

import DeleteExamButton from '@components/tools/DeleteExam'
import RenameExam from '@components/tools/RenameExam'

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
    return (
      <div key={examId} data-exam-id={examId} data-exam-name={fileName}>
        {children}
      </div>
    )
  }

  return (
    <div data-exam-id={examId} data-exam-name={fileName}>
      <details>
        <summary className="exam-list-item__summary">{children}</summary>
        <div className="exam-list-item__manage-container">
          {showRename && <RenameExam currentName={fileName} examId={examId} />}
          {showDelete && (
            <DeleteExamButton fileName={fileName} examId={examId} />
          )}
        </div>
      </details>
    </div>
  )
}

export default ExamListItemWrapper
