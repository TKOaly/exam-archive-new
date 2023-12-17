import { redirect } from 'next/navigation'

import config from '@lib/config'
import { adminGetS3Objects, sortByPrefixThenObjNameAsc } from '@services/admin'

import { validateRights } from '@services/tkoUserService'

import ObjectListItem from '@components/ObjectList/ObjectListItem'
import ObjectListHeader from '@components/ObjectList/ObjectListHeader'

const Page = async () => {
  if (config.NODE_ENV !== 'development') {
    redirect('/')
  }

  const isRights = await validateRights('rename', 'remove')

  if (!isRights) {
    redirect('/')
  }

  const s3Objects = await adminGetS3Objects()
  const objects = s3Objects.sort(sortByPrefixThenObjNameAsc)

  return (
    <main
      role="table"
      aria-label="Files"
      className="admin-list-container divide-y"
    >
      <ObjectListHeader />
      {objects.map(file => (
        <ObjectListItem file={file} />
      ))}
    </main>
  )
}

export default Page
