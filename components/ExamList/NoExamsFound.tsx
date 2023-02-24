import classnames from 'classnames'

const NoExamsFound = ({ className }: { className: string }) => (
  <p className={classnames('no-exams-found', className)}>No exams found.</p>
)

export default NoExamsFound
