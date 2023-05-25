import LoadingItem from '@components/ExamList/Loading'
import ExamListHeader from '@components/ExamList/ExamListHeader'

const Loading = () => {
  return (
    <div className="exam-list-container">
      <div role="table" aria-label="Exams" className="exam-list">
        <ExamListHeader showManage={true} />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </div>
    </div>
  )
}

export default Loading
