import { CourseListItem as CourseListItemType } from '@utilities/types'

import CourseListItem from '@components/CourseList/CourseListItem'
import CourseListHeader from '@components/CourseList/CourseListHeader'

interface CourseListProps {
  courses: CourseListItemType[]
}

const CourseList = ({ courses }: CourseListProps) => {
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
