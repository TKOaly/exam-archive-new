import { FaceFrownIcon } from '@heroicons/react/24/outline'

const NoCoursesFound = () => (
  <div role="row" className="py-2 hover:bg-slate-100 list-row">
    <FaceFrownIcon role="cell" className="h-6 w-6 mx-2 list-row-icon" />
    <div role="cell" className="list-row-empty">
      No courses found.
    </div>
  </div>
)

export default NoCoursesFound
