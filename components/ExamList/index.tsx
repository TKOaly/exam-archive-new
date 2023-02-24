// import { useUserContext } from './context'
import { ExamListItem as ExamListItemType } from '@utilities/types'

import ExamListHeader from '@components/ExamList/ExamListHeader'
import ExamListItem from '@components/ExamList/ExamListItem'
import NoExamsFound from '@components/ExamList/NoExamsFound'

const ExamList = ({
  courseId,
  exams
}: {
  courseId: number
  exams: ExamListItemType[]
}) => {
  // const { canDelete, canRename } = useUserContext()
  const canDelete = true
  const canRename = true

  if (exams.length === 0) {
    return (
      <div className="exam-list-container" data-course-id={courseId}>
        <NoExamsFound className="exam-list__not-found" />
      </div>
    )
  }

  return (
    <div className="exam-list-container" data-course-id={courseId}>
      <div role="table" aria-label="Exams" className="exam-list">
        <ExamListHeader showDelete={canDelete} showRename={canRename} />
        {exams.map(exam => (
          <ExamListItem
            key={exam.id}
            exam={exam}
            showDelete={canDelete}
            showRename={canRename}
          />
        ))}
      </div>
    </div>
  )
}

export default ExamList
