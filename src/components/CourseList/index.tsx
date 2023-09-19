import { getCourseListing } from '@services/archive'
import { getSessionUser } from '@services/tkoUserService'

import CourseListItem from '@components/CourseList/CourseListItem'
import CourseListHeader from '@components/CourseList/CourseListHeader'

const CourseList = async () => {
  const { rights } = await getSessionUser()
  const courses = await getCourseListing()

  return (
    <div role="table" aria-label="Courses" className="divide-y pb-5">
      <CourseListHeader />
      {courses.map(course => {
        return (
          <CourseListItem
            key={course.id}
            course={course}
            showManage={rights.remove || rights.rename}
          />
        )
      })}
    </div>
  )
}

export default CourseList
