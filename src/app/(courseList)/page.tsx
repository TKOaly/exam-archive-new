import { getCourseListing } from '@services/archive'
import { getSessionUser } from '@services/tkoUserService'

import CourseListItem from '@components/CourseList/CourseListItem'
import CourseListHeader from '@components/CourseList/CourseListHeader'
import NoCoursesFound from '@components/CourseList/NoCoursesFound'

const Page = async () => {
  const { rights } = await getSessionUser()
  const courses = await getCourseListing()

  return (
    <div role="table" aria-label="Courses" className="list-container divide-y">
      <CourseListHeader showManage={rights.remove || rights.rename} />
      {courses.length === 0 && <NoCoursesFound />}
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

export default Page
