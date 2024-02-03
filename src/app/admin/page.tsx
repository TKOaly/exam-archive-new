import { redirect } from 'next/navigation'

import { adminGetS3Objects, sortByPrefixThenObjNameAsc } from '@services/admin'
import { getSessionUser, validateRights } from '@services/tkoUserService'

import { UserRole } from '@lib/types'

import ObjectListItem from '@components/ObjectList/ObjectListItem'
import ObjectListHeader from '@components/ObjectList/ObjectListHeader'

const Page = async () => {
  const user = await getSessionUser()
  const isRights = await validateRights('rename', 'remove')

  if (!isRights) {
    redirect('/')
  }

  if (user.role !== UserRole.Yllapitaja) {
    redirect('/')
  }

  const s3Objects = await adminGetS3Objects()
  const objects = s3Objects.sort(sortByPrefixThenObjNameAsc)

  return (
    <div
      role="table"
      aria-label="Files"
      className="admin-list-container divide-y"
    >
      <ObjectListHeader />
      {objects.map(file => (
        <ObjectListItem file={file} />
      ))}
    </div>
  )
}

export default Page
