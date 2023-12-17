import { FaceFrownIcon } from '@heroicons/react/24/outline'

const NotFound = () => (
  <div role="row" className="list-row py-2 hover:bg-slate-100">
    <FaceFrownIcon role="cell" className="list-row-icon mx-2 h-6 w-6" />
    <div role="cell" className="list-row-empty">
      No rows found.
    </div>
  </div>
)

export default NotFound
