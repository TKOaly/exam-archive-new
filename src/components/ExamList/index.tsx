import { notFound } from 'next/navigation'

import { getCourseInfo } from '@services/archive'

import ExamListHeader from '@components/ExamList/ExamListHeader'
import ExamListItem from '@components/ExamList/ExamListItem'
import NoExamsFound from '@components/ExamList/NoExamsFound'
import { getSessionUser } from '@services/tkoUserService'

const ExamList = async ({ courseId }: { courseId: number }) => {
  const { rights } = await getSessionUser()

  const course = await getCourseInfo(courseId)
  if (!course) {
    notFound()
  }

  if (course.exams.length === 0) {
    return (
      <div
        role="table"
        aria-label="Exams"
        className="divide-y pb-5"
        data-course-id={course.id}
        data-course-name={course.name}
      >
        <ExamListHeader showManage={false} />
        <NoExamsFound />
      </div>
    )
  }

  return (
    <div
      role="table"
      aria-label="Exams"
      className="divide-y pb-5"
      data-course-id={course.id}
      data-course-name={course.name}
    >
      <ExamListHeader showManage={rights.remove || rights.rename} />
      {course.exams.map(exam => (
        <ExamListItem exam={exam} showManage={rights.remove || rights.rename} />
      ))}
    </div>
  )
}

export default ExamList
