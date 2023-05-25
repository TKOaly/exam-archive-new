import ExamListHeader from '@components/ExamList/ExamListHeader'
import ExamListItem from '@components/ExamList/ExamListItem'
import NoExamsFound from '@components/ExamList/NoExamsFound'
import ExamListItemWrapper from './ExamListItemWrapper'
import { getSession } from '@lib/sessions'
import { getCourseInfo } from '@services/archive'
import { notFound } from 'next/navigation'

const ExamList = async ({ courseId }: { courseId: number }) => {
  const { rights } = await getSession()

  const course = await getCourseInfo(courseId)
  if (!course) {
    notFound()
  }

  if (course.exams.length === 0) {
    return (
      <div
        className="exam-list-container"
        data-course-id={course.id}
        data-course-name={course.name}
      >
        <NoExamsFound className="exam-list__not-found" />
      </div>
    )
  }

  return (
    <div
      className="exam-list-container"
      data-course-id={course.id}
      data-course-name={course.name}
    >
      <div role="table" aria-label="Exams" className="exam-list">
        <ExamListHeader showManage={rights.remove || rights.rename} />
        {course.exams.map(exam => (
          <ExamListItemWrapper
            key={exam.id}
            exam={exam}
            showDelete={rights.remove}
            showRename={rights.rename}
          >
            <ExamListItem
              exam={exam}
              showManage={rights.remove || rights.rename}
            />
          </ExamListItemWrapper>
        ))}
      </div>
    </div>
  )
}

export default ExamList
