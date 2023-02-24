const ExamListHeader = ({
  showDelete,
  showRename
}: {
  showDelete: boolean
  showRename: boolean
}) => {
  return (
    <div role="row" className="exam-list-header">
      <div role="columnheader" className="exam-list-header__name">
        Exam
      </div>
      <div role="columnheader" className="exam-list-header__last-modified">
        Upload date
      </div>
      {showDelete && <div role="columnheader" aria-label="Delete" />}
      {showRename && (
        <div
          role="columnheader"
          aria-label="Rename"
          className="exam-list-header__rename"
        />
      )}
    </div>
  )
}

export default ExamListHeader
