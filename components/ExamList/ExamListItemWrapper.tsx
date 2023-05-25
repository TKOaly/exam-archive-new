import React from 'react'

import DeleteExamButton from '@components/tools/DeleteExam'
import RenameExam from '@components/tools/RenameExam'
import { ExamListItem } from '@lib/types'

interface ExamListItemWrapperProps {
  children: React.ReactNode
  exam: ExamListItem
  showDelete: boolean
  showRename: boolean
}

const ExamListItemWrapper = ({
  children,
  exam,
  showDelete,
  showRename
}: ExamListItemWrapperProps) => {
  if (!showDelete && !showRename) {
    return (
      <div data-exam-id={exam.id} data-exam-name={exam.fileName}>
        {children}
      </div>
    )
  }

  return (
    <div data-exam-id={exam.id} data-exam-name={exam.fileName}>
      <details>
        <summary className="exam-list-item__summary">{children}</summary>
        <div className="exam-list-item__manage-container">
          {showRename && (
            <RenameExam currentName={exam.fileName} examId={exam.id} />
          )}
          {showDelete && (
            <DeleteExamButton fileName={exam.fileName} examId={exam.id} />
          )}
        </div>
      </details>
    </div>
  )
}

export default ExamListItemWrapper
