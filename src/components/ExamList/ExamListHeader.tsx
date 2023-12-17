const ExamListHeader = ({ showManage }: { showManage: boolean }) => {
  return (
    <div role="row" className="list-row py-2">
      <div role="columnheader" className="list-row-icon">
        <span className="sr-only">Icon</span>
      </div>
      <div
        role="columnheader"
        className="list-row-name self-end font-serif font-bold lowercase"
      >
        File
      </div>
      <div
        role="columnheader"
        className="list-row-date font-serif font-bold lowercase"
      >
        Upload date
      </div>
      {showManage && (
        <div
          role="columnheader"
          className="list-row-manage"
          aria-label="Manage"
        >
          <span className="sr-only">Manage</span>
        </div>
      )}
    </div>
  )
}

export default ExamListHeader
