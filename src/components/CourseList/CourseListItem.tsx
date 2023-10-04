import formatDate from 'date-fns/format'
import fiLocale from 'date-fns/locale/fi'

import Link from 'next/link'
import { FolderIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

import { urlForCourse } from '@lib/courses'
import { CourseListItem } from '@lib/types'

interface CourseListItemProps {
  course: CourseListItem
  showManage: boolean
}

const CourseListItem = ({ course, showManage }: CourseListItemProps) => {
  const { id, name, url, lastModified } = course

  return (
    <div
      role="row"
      className="py-2 hover:bg-slate-100 list-row"
      data-course-id={id}
      data-course-name={name}
    >
      <FolderIcon role="cell" className="h-6 w-6 mx-2 fill-cyan-500 list-row-icon" />
      <Link
        role="cell"
        href={url}
        title={`Open course "${name}"`}
        arial-label={`Open course "${name}"`}
        className="hover:underline hover:decoration-cyan-500 list-row-name"
      >
        {name}
      </Link>
      {lastModified && (
        <time
          role="cell"
          className="font-mono text-xs text-gray-600 list-row-date"
          title={`Last modified on ${formatDate(lastModified, 'yyyy-MM-dd', { locale: fiLocale })}`}
          dateTime={lastModified.toISOString()}
          data-test-id="last-modified-time"
        >
          {formatDate(lastModified, 'yyyy-MM-dd', { locale: fiLocale })}
        </time>
      )}
      {showManage && (
        <Link
          role="cell"
          aria-label={`Manage course "${name}"`}
          title={`Manage course "${name}"`}
          href={`${urlForCourse(id, name)}/manage`}
          className="mx-2 list-row-manage flex w-10 flex-row bg-gray-800 px-3 py-1 font-serif lowercase text-white ring-inset hover:bg-gray-600 focus:ring focus:ring-gray-400"
        >
          <PencilSquareIcon className="h-4 w-4 self-center" />{' '}
          <span className="sr-only">{`Manage course "${name}"`}</span>
        </Link>
      )}
    </div>
  )
}

export default CourseListItem
