import path from 'path'
import formatDate from 'date-fns/format'
import fiLocale from 'date-fns/locale/fi'

import Link from 'next/link'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

import { ExamListItem } from '@lib/types'

import { DocumentIcon, PdfIcon, PhotoIcon } from '@components/icons/File'

const iconForFile = (mimeType: string) => {
  if (mimeType.startsWith('image/')) {
    return PhotoIcon
  }
  if (mimeType === 'application/pdf') {
    return PdfIcon
  }
  return DocumentIcon
}

const splitExtension = (fileName: string) => {
  const extname = path.extname(fileName)
  const basename = path.basename(fileName, extname).replace(/_/g, '_\u200b')

  return { extname, basename }
}

interface ExamListItemProps {
  exam: ExamListItem
  showManage: boolean
}

const ExamListItem = ({ exam, showManage }: ExamListItemProps) => {
  const { id, fileName, mimeType, uploadDate, downloadUrl } = exam
  const Icon = iconForFile(mimeType)

  const { extname, basename } = splitExtension(fileName)

  return (
    <div
      role="row"
      className="flex flex-row items-center px-1 hover:bg-slate-100"
      data-exam-id={id}
      data-exam-name={fileName}
    >
      <div role="cell" className="m-2 shrink-0">
        <Icon role="cell" ariaHidden={true} alt="" className="h-6 w-6" />
      </div>
      <div role="cell" className="mx-1 my-2 grow overflow-hidden text-ellipsis">
        <Link
          href={downloadUrl}
          title={`Open exam "${fileName}"`}
          arial-label={`Open exam "${fileName}"`}
          target="_blank"
          className="hover:underline hover:decoration-cyan-500"
        >
          {basename}
          {extname}
        </Link>

        {uploadDate && (
          <>
            <br />
            <time
              className="block font-mono text-xs text-gray-600 sm:hidden"
              title={uploadDate.toISOString()}
              dateTime={uploadDate.toISOString()}
            >
              {formatDate(uploadDate, 'yyyy-MM-dd', { locale: fiLocale })}
            </time>
          </>
        )}
      </div>
      <div role="cell" className="mx-2 hidden sm:block">
        {uploadDate && (
          <time
            className="font-mono text-xs text-gray-600"
            title={uploadDate.toISOString()}
            dateTime={uploadDate.toISOString()}
          >
            {formatDate(uploadDate, 'yyyy-MM-dd', { locale: fiLocale })}
          </time>
        )}
      </div>
      {showManage && (
        <div role="cell" className="m-2 shrink-0">
          <Link
            aria-label={`Manage exam "${fileName}"`}
            title={`Manage exam "${fileName}"`}
            href={`${downloadUrl}/manage`}
            className="flex w-10 flex-row bg-gray-800 px-3 py-1 font-serif lowercase text-white ring-inset hover:bg-gray-600 focus:ring focus:ring-gray-400"
          >
            <PencilSquareIcon className="h-4 w-4 self-center" />{' '}
            <span className="sr-only">{`Manage exam "${fileName}"`}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default ExamListItem
