import formatDate from 'date-fns/format'
import fiLocale from 'date-fns/locale/fi'

import { CourseListItem } from '@lib/types'

import Link from 'next/link'

import FolderIcon from '@components/icons/Folder'

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
        <Link
          data-instant
          href={url}
          title={name}
          className="course-list-item__link"
        >
          {name}
        </Link>
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

export default CourseListItem
