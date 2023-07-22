const CourseListHeader = () => {
  const showManage = true
  return (
    <div role="row" className="flex flex-row items-center px-1">
      <div role="columnheader" className="m-2 box-border">
        <div className="h-6 w-6" />
      </div>
      <div
        role="columnheader"
        className="mx-1 my-2 grow font-serif font-bold lowercase"
      >
        Course
      </div>
      <div
        role="columnheader"
        className="hidden px-2 text-right font-serif font-bold lowercase sm:block"
      >
        Last modified
      </div>
      {showManage && (
        <div
          role="columnheader"
          className="m-2 w-10 shrink-0"
          aria-label="Manage"
        />
      )}
    </div>
  )
}

export default CourseListHeader
