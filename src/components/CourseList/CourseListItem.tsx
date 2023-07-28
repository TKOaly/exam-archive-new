import formatDate from 'date-fns/format'
import fiLocale from 'date-fns/locale/fi'

import Link from 'next/link'
import { FolderIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

import { urlForCourse } from '@lib/courses'
import { CourseListItem } from '@lib/types'

const CourseListItem = ({ id, name, url, lastModified }: CourseListItem) => {
  const showManage = true
  return (
    <div
      role="row"
      className="flex flex-row items-center px-1 hover:bg-slate-100"
      data-course-id={id}
      data-course-name={name}
    >
      <div role="cell" className="m-2 shrink-0">
        <FolderIcon className="h-6 w-6 fill-cyan-500" />
      </div>
      <div role="cell" className="mx-1 my-2 grow overflow-hidden text-ellipsis">
        <Link
          href={url}
          title={`Open course "${name}"`}
          arial-label={`Open course "${name}"`}
          className="hover:underline hover:decoration-cyan-500"
        >
          {name}
        </Link>
        {lastModified && (
          <>
            <br />
            <time
              className="block font-mono text-xs text-gray-600 sm:hidden"
              dateTime={lastModified.toISOString()}
              data-test-id="last-modified-time-mobile"
            >
              {formatDate(lastModified, 'yyyy-MM-dd', { locale: fiLocale })}
            </time>
          </>
        )}
      </div>
      <div
        className="mx-2 hidden sm:block"
        role="cell"
        data-test-id="last-modified"
      >
        {lastModified && (
          <time
            className="font-mono text-xs text-gray-600"
            dateTime={lastModified.toISOString()}
            data-test-id="last-modified-time"
          >
            {formatDate(lastModified, 'yyyy-MM-dd', { locale: fiLocale })}
          </time>
        )}
      </div>
      {showManage && (
        <div role="cell" className="m-2 shrink-0">
          <Link
            aria-label={`Manage course "${name}"`}
            title={`Manage course "${name}"`}
            href={`${urlForCourse(id, name)}/manage`}
            className="flex w-10 flex-row bg-gray-800 px-3 py-1 font-serif lowercase text-white  ring-inset hover:bg-gray-600 focus:ring focus:ring-gray-400"
          >
            <PencilSquareIcon className="h-4 w-4 self-center" />{' '}
            <span className="sr-only">{`Manage course "${name}"`}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CourseListItem
