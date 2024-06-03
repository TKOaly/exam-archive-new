import { FaceFrownIcon } from '@heroicons/react/24/outline'

const NoFilesFound = () => (
  <div role="row" className="admin-list-row py-2 hover:bg-slate-100">
    <FaceFrownIcon role="cell" className="list-row-icon mx-2 h-6 w-6" />
    <div role="cell" className="list-row-empty">
      No files found.
    </div>
  </div>
)

export default NoFilesFound
