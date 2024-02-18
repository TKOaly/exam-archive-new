import { redirect } from 'next/navigation'

import { adminGetS3Objects, sortByPrefixThenObjNameAsc } from '@services/admin'
import { getSessionUser, validateUserRights } from '@services/tkoUserService'

import { UserRole } from '@lib/types'

import ObjectListItem from '@components/ObjectList/ObjectListItem'
import ObjectListHeader from '@components/ObjectList/ObjectListHeader'

const Page = async () => {
  await validateUserRights('rename', 'remove')
  const user = await getSessionUser()

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
