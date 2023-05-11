import { ExamListItem as ExamListItemType } from '@lib/types'

import ExamListHeader from '@components/ExamList/ExamListHeader'
import ExamListItem from '@components/ExamList/ExamListItem'
import NoExamsFound from '@components/ExamList/NoExamsFound'
import { AccessRight } from '@lib/types'

const ExamList = ({
  courseId,
  exams,
  rights
}: {
  courseId: number
  exams: ExamListItemType[]
  rights: { [right in AccessRight]: boolean }
}) => {
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
        <ExamListHeader showDelete={rights.remove} showRename={rights.rename} />
        {exams.map(exam => (
          <ExamListItem
            key={exam.id}
            exam={exam}
            showDelete={rights.remove}
            showRename={rights.rename}
          />
        ))}
      </div>
    </div>
  )
}

export default ExamList
