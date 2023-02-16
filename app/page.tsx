import Footer from '@components/Footer'
import FlashMessage from '@components/FlashMessage'
import ListingNavigation from '@components/Navigation'
import CourseList from '@components/CourseList'
import { ControlsBox, Logout } from '@components/Controls'
import CreateCourseForm from '@components/forms/CreateCourseForm'

import { getCourseListing } from '@services/archive'

const Page = async () => {
  const flash = {
    msg: 'toot',
    type: 'info'
  }

  const courses = await getCourseListing()

  const username = 'toot'
  const userRights = { remove: true, rename: true, upload: true }
  return (
    <>
      <ListingNavigation title="Courses" />
      <div className="page-container">
        <FlashMessage flash={flash} />
        <main>
          <CourseList courses={courses} />
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
