const React = require('react')
const PropTypes = require('prop-types')
const formatDate = require('date-fns/format')
const fiLocale = require('date-fns/locale/fi')

const Layout = require('./common/Layout')
const Footer = require('./common/Footer')
const FlashMessage = require('./common/FlashMessage')
const { UserContextProvider } = require('./common/context')
const ListingNavigation = require('./common/ListingNavigation')
const ExamList = require('./common/ExamList')
const { ControlsBox, Logout } = require('./common/Controls')

const ExamTableHeader = ({ showDelete, showRename }) => {
  return (
    <tr className="exam-table-header">
      <th>Name</th>
      <th>Last modified</th>
      {showDelete && <th>Delete</th>}
      {showRename && <th>Rename</th>}
    </tr>
  )
}

ExamTableHeader.propTypes = {
  showDelete: PropTypes.bool,
  showRename: PropTypes.bool
}

const mimeTypeImage = mimeType => {
  switch (mimeType) {
    case 'application/pdf':
      return 'pdf.png'
    case 'image/png':
    case 'image/jpeg':
    case 'image/gif':
      return 'image.png'
    case 'text/html':
    case 'text/plain':
    case 'text/markdown':
      return 'txt.png'
    default:
      return 'unknown.png'
  }
}

const DeleteExamButton = ({ examId }) => {
  return (
    <form
      className="delete-exam-button"
      method="post"
      action={`/archive/delete-exam/${examId}`}
    >
      <button
        className="delete-exam-button__button"
        aria-label="Delete exam"
        type="submit"
      >
        <img src="/static/img/delete.png" alt="Delete" />
      </button>
    </form>
  )
}

const ExamTableRow = ({ exam, showDelete, showRename }) => {
  const { id, fileName, mimeType, uploadDate, downloadUrl } = exam

  return (
    <tr className="exam-table-row" key={id}>
      <td>
        <img
          className="exam-table__icon"
          src={`/static/img/filetypes/${mimeTypeImage(mimeType)}`}
          alt="Icon"
        />
        <a className="exam-table__link" href={downloadUrl}>
          {fileName}
        </a>
      </td>
      <td>
        <time dateTime={uploadDate.toISOString()}>
          {formatDate(uploadDate, 'yyyy-MM-dd HH:mm', {
            locale: fiLocale
          })}
        </time>
      </td>
      {showDelete && (
        <td className="exam-table-row__delete">
          <DeleteExamButton action={makeDeleteExamAction(id)} />
        </td>
      )}
      {showRename && (
        <td className="exam-table-row__rename">
          <button
            /* augments.js */
            data-current-name={fileName}
            data-id={id}
            data-rename-exam-button
            className="exam-table-row__rename-button"
          >
            rename
          </button>
        </td>
      )}
    </tr>
  )
}

const examShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  fileName: PropTypes.string.isRequired,
  uploadDate: PropTypes.instanceOf(Date).isRequired,
  downloadUrl: PropTypes.string.isRequired
})

ExamTableRow.propTypes = {
  exam: examShape.isRequired,
  showDelete: PropTypes.bool,
  showRename: PropTypes.bool
}

const GoBackRow = ({ href }) => {
  return (
    <tr className="exam-table-row">
      <td>
        <img
          className="exam-table__icon"
          src="/static/img/up.png"
          alt="Go back"
        />
        <a href={href}>Parent Directory</a>
      </td>
    </tr>
  )
}

GoBackRow.propTypes = {
  href: PropTypes.string.isRequired
}

const ExamTable = ({ exams, previousPageUrl, showDelete, showRename }) => {
  return (
    <table className="exam-table">
      <thead>
        <ExamTableHeader showDelete={showDelete} showRename={showRename} />
      </thead>
      <tbody>
        <GoBackRow href={previousPageUrl} />
        {exams.map(exam => (
          <ExamTableRow
            key={exam.id}
            exam={exam}
            showDelete={showDelete}
            showRename={showRename}
          />
        ))}
      </tbody>
    </table>
  )
}

ExamTable.propTypes = {
  exams: PropTypes.arrayOf(examShape.isRequired).isRequired,
  previousPageUrl: PropTypes.string.isRequired,
  showDelete: PropTypes.bool,
  showRename: PropTypes.bool
}

const UploadExamForm = ({ courseId }) => {
  return (
    <form
      className="exam-upload-form"
      method="post"
      encType="multipart/form-data"
      action="/archive/upload"
    >
      <h3>Upload a new file here:</h3>
      <input type="hidden" name="course_id" value={courseId} />
      <input
        className="exam-upload-form__file"
        required
        aria-label="File"
        type="file"
        name="file"
      />
      <input
        className="exam-upload-form__submit"
        type="submit"
        name="upload"
        value="Upload"
      />
    </form>
  )
}

UploadExamForm.propTypes = {
  courseId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

const CoursePage = ({
  flash,
  course,
  exams,
  previousPageUrl,
  username,
  userRights
}) => {
  return (
    <Layout title={course.name} flash={flash}>
      <UserContextProvider
        username={username}
        canDelete={userRights.remove}
        canRename={userRights.rename}
      >
        <ListingNavigation title={course.name} backButtonHref="/archive" />
        <div className="page-container">
          <FlashMessage flash={flash} />
          <main>
            <ExamList courseId={course.id} exams={exams} />
            {/*<ExamTable
              exams={exams}
              previousPageUrl={previousPageUrl}
              showDelete={userRights.remove}
              showRename={userRights.rename}
            />*/}

            <ControlsBox>
              {userRights.upload && <UploadExamForm courseId={course.id} />}
              {userRights.rename && (
                <>
                  <h3>Rename course</h3>
                  <button
                    data-rename-course-button
                    data-current-name={course.name}
                    data-id={course.id}
                  >
                    rename
                  </button>
                </>
              )}
              {userRights.remove && (
                <>
                  <h3>Delete course</h3>
                  <p>
                    Course can only be deleted after all exams have been
                    deleted.
                  </p>
                  <form
                    action={`/archive/delete-course/${course.id}`}
                    method="post"
                  >
                    <input type="submit" value="delete" />
                  </form>
                </>
              )}
              <Logout username={username} />
            </ControlsBox>
          </main>
          <Footer />
        </div>
      </UserContextProvider>
    </Layout>
  )
}

module.exports = CoursePage
