import { redirect } from 'next/navigation'

import Footer from '@components/Footer'
import FlashMessage from '@components/FlashMessage'
import ListingNavigation from '@components/Navigation'

import { ControlsBox, Logout } from '@components/Controls'

import { adminGetS3Objects, sortByPrefixThenObjNameAsc } from '@services/admin'
import { getSession } from '@services/tkoUserService'

import config from '@lib/config'

export const metadata = {
  title: 'Tärpistö - TKO-äly ry',
  viewport: 'width=device-width',
  robots: {
    index: false
  }
}

const Page = async () => {
  if (config.NODE_ENV !== 'development') {
    redirect('/')
  }

  const { user, rights } = await getSession()

  if (!rights.rename && !rights.remove) {
    redirect('/')
  }

  const s3Objects = await adminGetS3Objects()
  const objects = s3Objects.sort(sortByPrefixThenObjNameAsc)

  return (
    <>
      <ListingNavigation title="Admin tools" backButtonHref="/" />
      <div className="page-container">
        <main>
          <h3>Objects in database</h3>
          <div className="admin-s3__table-container">
            <table className="admin-s3__table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>file_name</th>
                  <th>file_path/object key</th>
                </tr>
              </thead>
              <tbody>
                {objects.map(({ id, fileName, filePath }) => (
                  <tr key={[id, fileName, filePath].join('-')}>
                    <td>{id}</td>
                    <td>{fileName}</td>
                    <td>{filePath}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ControlsBox>
            <Logout username={user.username} />
          </ControlsBox>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Page
