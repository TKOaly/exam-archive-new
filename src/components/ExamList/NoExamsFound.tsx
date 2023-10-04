import { FaceFrownIcon } from '@heroicons/react/24/outline'

const NoExamsFound = () => (
  <div role="row" className="py-2 hover:bg-slate-100 list-row">
    <FaceFrownIcon role="cell" className="h-6 w-6 mx-2 list-row-icon" />
    <div role="cell" className="list-row-empty">
      No exams found.
    </div>
  </div>
)

export default NoExamsFound
