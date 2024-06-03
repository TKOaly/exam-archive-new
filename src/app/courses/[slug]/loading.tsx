import { getSessionUser } from '@services/tkoUserService'

import FileListHeader from '@components/FileList/FileListHeader'
import LoadingItem from '@components/FileList/Loading'

const Loading = async () => {
  const { rights } = await getSessionUser()

  return (
    <main role="alert" aria-label="Loading..." className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 divide-y divide-yellow-500">
        <h3 className="px-2 font-serif text-xl font-bold lowercase leading-tight">
          Exams
        </h3>
        <div
          role="table"
          aria-label="Exams"
          className="list-container divide-y"
        >
          <FileListHeader showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
        </div>
      </div>
      <div className="flex flex-col gap-1 divide-y divide-yellow-500">
        <h3 className="px-2 font-serif text-xl font-bold lowercase leading-tight">
          Lecture notes
        </h3>
        <div
          role="table"
          aria-label="Lecture notes"
          className="list-container divide-y"
        >
          <FileListHeader showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
        </div>
      </div>
      <div className="flex flex-col gap-1 divide-y divide-yellow-500">
        <h3 className="px-2 font-serif text-xl font-bold lowercase leading-tight">
          Exercises
        </h3>
        <div
          role="table"
          aria-label="Exercises"
          className="list-container divide-y"
        >
          <FileListHeader showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
        </div>
      </div>
      <div className="flex flex-col gap-1 divide-y divide-yellow-500">
        <h3 className="px-2 font-serif text-xl font-bold lowercase leading-tight">
          Others
        </h3>
        <div
          role="table"
          aria-label="Others"
          className="list-container divide-y"
        >
          <FileListHeader showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
          <LoadingItem showManage={rights.remove || rights.rename} />
        </div>
      </div>
    </main>
  )
}

export default Loading
