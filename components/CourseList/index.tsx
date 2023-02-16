import formatDate from 'date-fns/format'
import fiLocale from 'date-fns/locale/fi'

import FolderIcon from '@components/icons/Folder'

import { CourseListItem } from '@utilities/types'

const CourseListItem = ({ id, name, url, lastModified }: CourseListItem) => {
  return (
    <div role="row" className="course-list-item" data-course-id={id}>
      <FolderIcon
        alt=""
        role="cell"
        ariaHidden={true}
        className="course-list-item__icon"
      />
      <div
        role="cell"
        lang="fi-FI"
        className="course-list-item__link-container"
      >
        <a
          data-instant
          href={url}
          title={name}
          className="course-list-item__link"
        >
          {name}
        </a>
      </div>
      <div className="course-list-item__last-modified" role="cell">
        {lastModified && (
          <time dateTime={lastModified.toISOString()}>
            {formatDate(lastModified, 'yyyy-MM-dd', { locale: fiLocale })}
          </time>
        )}
      </div>
    </div>
  )
}

const CourseListHeader = () => {
  return (
    <div role="row" className="course-list-header">
      <div role="columnheader" className="course-list-header__name">
        Course
      </div>
      <div role="columnheader" className="course-list-header__last-modified">
        Last modified
      </div>
    </div>
  )
}

interface CourseListProps {
  courses: CourseListItem[]
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
