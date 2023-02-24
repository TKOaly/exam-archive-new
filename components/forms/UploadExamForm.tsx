interface UploadExamFormProps {
  courseId: number
}

const UploadExamForm = ({ courseId }: UploadExamFormProps) => {
  return (
    <form
      className="exam-upload-form"
      method="post"
      encType="multipart/form-data"
      action="/api/exam/upload"
    >
      <h3>Upload a new file here:</h3>
      <input type="hidden" name="courseId" value={courseId} />
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

export default UploadExamForm
