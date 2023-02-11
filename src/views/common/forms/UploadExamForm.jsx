const React = require('react')
const PropTypes = require('prop-types')

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

module.exports = UploadExamForm
