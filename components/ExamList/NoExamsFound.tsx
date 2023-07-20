import { FaceFrownIcon } from '@heroicons/react/24/outline'

const NoExamsFound = () => (
  <div role="row" className="flex max-w-full flex-row px-1 hover:bg-slate-100">
    <div role="cell" className="m-2 box-border shrink-0 self-center">
      <FaceFrownIcon className="h-6 w-6 self-center" />
    </div>
    <div role="cell" className="mx-2 my-2 self-center">
      No exams found.
    </div>
    <div role="cell" className=""></div>
  </div>
)

export default NoExamsFound
