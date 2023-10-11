import CourseListHeader from '@components/CourseList/CourseListHeader'
import LoadingItem from '@components/CourseList/Loading'

import { getSessionUser } from '@services/tkoUserService'

const Loading = async () => {
  const { rights } = await getSessionUser()

  return (
    <main
      role="alert"
      aria-label="Loading courses..."
      className="list-container divide-y pb-5"
    >
        <CourseListHeader showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
        <LoadingItem showManage={rights.rename || rights.remove} />
    </main>
  )
}

export default Loading
