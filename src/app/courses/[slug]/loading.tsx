import { getSessionUser } from '@services/tkoUserService'

import ExamListHeader from '@components/ExamList/ExamListHeader'
import LoadingItem from '@components/ExamList/Loading'

const Loading = async () => {
  const { rights } = await getSessionUser()

  return (
    <div
      role="alert"
      aria-label="Loading exams..."
      className="exam-list-container"
    >
      <div role="table" aria-label="Exams" className="exam-list">
        <ExamListHeader showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
      </div>
    </div>
  )
}

export default Loading
