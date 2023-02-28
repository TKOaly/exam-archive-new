import Footer from '@components/Footer'
import FlashMessage from '@components/FlashMessage'
import ListingNavigation from '@components/Navigation'
import CourseList from '@components/CourseList'
import { ControlsBox, Logout } from '@components/Controls'
import CreateCourseForm from '@components/forms/CreateCourseForm'

import { getCourseListing } from '@services/archive'

export const metadata = {
  title: 'Tärpistö - TKO-äly ry',
  viewport: 'width=device-width',
  robots: {
    index: false
  }
}

const Page = () => {
  const flash = {
    msg: 'toot',
    type: 'info'
  }

  const username = 'toot'
  const userRights = { remove: true, rename: true, upload: true }
  return (
    <>
      <ListingNavigation title="Courses" />
      <div className="page-container">
        <FlashMessage flash={flash} />
        <main>
          {/* @ts-expect-error Async Server Component */}
          <CourseList />
          <ControlsBox>
            {userRights.upload && <CreateCourseForm />}
            <Logout username={username} />
          </ControlsBox>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Page
