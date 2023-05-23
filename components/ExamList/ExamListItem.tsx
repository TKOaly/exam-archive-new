import path from 'path'
import formatDate from 'date-fns/format'
import fiLocale from 'date-fns/locale/fi'
import Link from 'next/link'

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
  const basename = path.basename(fileName, extname)

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
    <div role="row" className="exam-list-item">
      <Icon
        role="cell"
        ariaHidden={true}
        alt=""
        className="exam-list-item__icon"
      />
      <div role="cell" className="exam-list-item__link-container">
        <Link
          href={downloadUrl}
          title={fileName}
          target="_blank"
          className="exam-list-item__link"
        >
          <span className="exam-list-item__basename">{basename}</span>
          <span className="exam-list-item__extname">{extname}</span>
        </Link>
      </div>
      <div role="cell" className="exam-list-item__last-modified">
        {uploadDate && (
          <time
            title={uploadDate.toISOString()}
            dateTime={uploadDate.toISOString()}
          >
            {formatDate(uploadDate, 'yyyy-MM-dd', { locale: fiLocale })}
          </time>
        )}
      </div>
      {showManage && (
        <div role="cell">
          <i
            role="button"
            aria-label={`Manage exam "${fileName}"`}
            title={`Manage exam "${fileName}"`}
            className="bi bi-pencil-square exam-list-item__edit-icon"
          />
        </div>
      )}
    </div>
  )
}

export default ExamListItem
