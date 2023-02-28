import { getCourseListing } from '@services/archive'

import CourseListItem from '@components/CourseList/CourseListItem'
import CourseListHeader from '@components/CourseList/CourseListHeader'

const CourseList = async () => {
  const courses = await getCourseListing()

  return (
    <div className="course-list-container">
      <div role="table" aria-label="Courses" className="course-list">
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
    </div>
  )
}

export default CourseList
