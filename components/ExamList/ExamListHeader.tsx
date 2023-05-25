const ExamListHeader = ({ showManage }: { showManage: boolean }) => {
  return (
    <div role="row" className="exam-list-header">
      <div role="columnheader" className="exam-list-header__name">
        Exam
      </div>
      <div role="columnheader" className="exam-list-header__last-modified">
        Upload date
      </div>
      {showManage && <div role="columnheader" aria-label="Manage" />}
    </div>
  )
}

export default ExamListHeader
