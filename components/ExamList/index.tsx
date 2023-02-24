import path from 'path'
import classnames from 'classnames'
import formatDate from 'date-fns/format'
import fiLocale from 'date-fns/locale/fi'

// import { useUserContext } from './context'

import { DocumentIcon, PdfIcon, PhotoIcon } from '@components/icons/File'

import { ExamListItem } from '@utilities/types'

const NoExamsFound = ({ className }: { className: string }) => (
  <p className={classnames('no-exams-found', className)}>No exams found.</p>
)

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

const DeleteExamButton = ({ exam }: { exam: ExamListItem }) => {
  return (
    <form
      className="delete-exam-button"
      method="post"
      action={`/api/exam/delete/${exam.id}`}
    >
      <button
        className="delete-exam-button__button"
        aria-label={`Delete exam "${exam.fileName}"`}
        title={`Delete exam "${exam.fileName}"`}
        type="submit"
      >
        <img aria-hidden="true" src="/static/img/delete.png" alt="Delete" />
      </button>
    </form>
  )
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
        <a
          href={downloadUrl}
          title={fileName}
          target="_blank"
          className="exam-list-item__link"
        >
          <span className="exam-list-item__basename">{basename}</span>
          <span className="exam-list-item__extname">{extname}</span>
        </a>
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
          <DeleteExamButton exam={exam} />
        </div>
      )}
      {showRename && (
        <div role="cell" className="exam-list-item__rename">
          <button
            /* augments.js */
            data-current-name={fileName}
            data-id={id}
            data-rename-exam-button
            className="exam-list-item__rename-button"
          >
            rename
          </button>
        </div>
      )}
    </div>
  )
}

const ExamListHeader = ({
  showDelete,
  showRename
}: {
  showDelete: boolean
  showRename: boolean
}) => {
  return (
    <div role="row" className="exam-list-header">
      <div role="columnheader" className="exam-list-header__name">
        Exam
      </div>
      <div role="columnheader" className="exam-list-header__last-modified">
        Upload date
      </div>
      {showDelete && <div role="columnheader" aria-label="Delete" />}
      {showRename && (
        <div
          role="columnheader"
          aria-label="Rename"
          className="exam-list-header__rename"
        />
      )}
    </div>
  )
}

const ExamList = ({
  courseId,
  exams
}: {
  courseId: number
  exams: ExamListItem[]
}) => {
  // const { canDelete, canRename } = useUserContext()
  const canDelete = true
  const canRename = true

  if (exams.length === 0) {
    return (
      <div className="exam-list-container" data-course-id={courseId}>
        <NoExamsFound className="exam-list__not-found" />
      </div>
    )
  }

  return (
    <div className="exam-list-container" data-course-id={courseId}>
      <div role="table" aria-label="Exams" className="exam-list">
        <ExamListHeader showDelete={canDelete} showRename={canRename} />
        {exams.map(exam => (
          <ExamListItem
            key={exam.id}
            exam={exam}
            showDelete={canDelete}
            showRename={canRename}
          />
        ))}
      </div>
    </div>
  )
}

export default ExamList
