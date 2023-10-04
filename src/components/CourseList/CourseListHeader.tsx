const CourseListHeader = ({ showManage }: { showManage: boolean }) => {
  return (
    <div role="row" className="py-2 list-row">
      <div role="columnheader" className="list-row-icon">
          <span className="sr-only">Icon</span>
      </div>
      <div
        role="columnheader"
        className="font-serif font-bold lowercase list-row-name self-end"
      >
        Course
      </div>
      <div
        role="columnheader"
        className="font-serif font-bold lowercase list-row-date"
      >
        Last modified
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

export default CourseListHeader
