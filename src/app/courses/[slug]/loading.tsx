import { getSessionUser } from '@services/tkoUserService'

import ExamListHeader from '@components/ExamList/ExamListHeader'
import LoadingItem from '@components/ExamList/Loading'

const Loading = async () => {
  const { rights } = await getSessionUser()

  return (
    <main
      role="alert"
      aria-label="Loading exams..."
      className="list-container divide-y pb-5"
    >
        <ExamListHeader showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
        <LoadingItem showManage={rights.remove || rights.rename} />
    </main>
  )
}

export default Loading
