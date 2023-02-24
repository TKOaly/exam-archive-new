import { ExamListItem } from '@utilities/types'

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

export default DeleteExamButton
