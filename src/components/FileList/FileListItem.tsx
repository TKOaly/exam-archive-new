import path from 'path'
import { format } from 'date-fns'
import { fi as fiLocale } from 'date-fns/locale'

import Link from 'next/link'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

import type { FileListItem as FileListItemType } from '@lib/types'

import { iconForFile } from '@components/icons/File'

const splitExtension = (fileName: string) => {
  const extname = path.extname(fileName)
  // In order to have invisible row change possibility adding zero width space
  const basename = path.basename(fileName, extname).replace(/_/g, '_\u200b')

  return { extname, basename }
}

interface FileListItemProps {
  file: FileListItemType
  showManage: boolean
}

const FileListItem = ({ file, showManage }: FileListItemProps) => {
  const { id, fileName, mimeType, uploadDate, downloadUrl } = file
  const Icon = iconForFile(mimeType)

  const { extname, basename } = splitExtension(fileName)

  return (
    <div
      key={id}
      role="row"
      className="list-row py-2 hover:bg-slate-100"
      data-file-id={id}
      data-file-name={fileName}
    >
      <Icon
        role="cell"
        ariaHidden={true}
        alt=""
        className="list-row-icon mx-2 h-6 w-6 flex-shrink-0"
      />
      <div role="cell" className="list-row-name">
        <Link
          href={downloadUrl}
          title={`Open "${fileName}"`}
          arial-label={`Open "${fileName}"`}
          target="_blank"
          className="hover:underline hover:decoration-cyan-500"
        >
          {basename}
          {extname}
        </Link>
      </div>
      {uploadDate && (
        <time
          role="cell"
          className="list-row-date font-mono text-xs text-gray-600"
          title={`Uploaded on ${format(uploadDate, 'yyyy-MM-dd', {
            locale: fiLocale
          })}`}
          dateTime={uploadDate.toISOString()}
          data-test-id="upload-date-time"
        >
          {format(uploadDate, 'yyyy-MM-dd', { locale: fiLocale })}
        </time>
      )}
      {showManage && (
        <div role="cell" className="list-row-manage">
          <Link
            aria-label={`Manage "${fileName}"`}
            title={`Manage "${fileName}"`}
            href={`${downloadUrl}/manage`}
            className="mx-2 flex w-10 flex-row bg-gray-800 px-3 py-1 font-serif lowercase text-white ring-inset hover:bg-gray-600 focus:ring focus:ring-gray-400"
          >
            <PencilSquareIcon className="h-4 w-4 self-center" />{' '}
            <span className="sr-only">{`Manage file "${fileName}"`}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default FileListItem
