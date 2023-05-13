import path from 'path'
import formatDate from 'date-fns/format'
import fiLocale from 'date-fns/locale/fi'
import Link from 'next/link'

import { ExamListItem } from '@lib/types'

import { DocumentIcon, PdfIcon, PhotoIcon } from '@components/icons/File'
import DeleteExamButton from '@components/ExamList/DeleteExamButton'
import RenameExam from '@components/ExamList/RenameExam'

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
  showDelete: boolean
  showRename: boolean
}

const ExamListItem = ({ exam, showDelete, showRename }: ExamListItemProps) => {
  const { id, fileName, mimeType, uploadDate, downloadUrl } = exam
  const Icon = iconForFile(mimeType)

  const { extname, basename } = splitExtension(fileName)

  return (
    <div
      role="row"
      className="exam-list-item"
      data-exam-id={id}
      data-exam-name={fileName}
    >
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
      {showDelete && (
        <div role="cell" className="exam-list-item__delete">
          <DeleteExamButton fileName={fileName} examId={id} />
        </div>
      )}
      {showRename && (
        <div role="cell" className="exam-list-item__rename">
          <RenameExam currentName={fileName} examId={id} />
        </div>
      )}
    </div>
  )
}

export default ExamListItem
