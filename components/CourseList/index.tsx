import { getCourseListing } from '@services/archive'

import CourseListItem from '@components/CourseList/CourseListItem'
import CourseListHeader from '@components/CourseList/CourseListHeader'

const CourseList = async () => {
  const courses = await getCourseListing()
  return (
    <div role="table" aria-label="Courses" className="divide-y pb-5">
      <CourseListHeader />
      {courses.map(course => {
        return (
          <CourseListItem
            key={course.id}
            id={course.id}
            name={course.name}
            url={course.url}
            lastModified={course.lastModified}
          />
        )
      })}
    </div>
  )
}

export default CourseList
