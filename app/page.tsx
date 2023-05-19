import { Suspense } from 'react'

import Footer from '@components/Footer'
import FlashMessage from '@components/FlashMessage'
import ListingNavigation from '@components/Navigation'
import CourseList from '@components/CourseList'
import { ControlsBox, Logout } from '@components/Controls'
import CreateCourse from '@components/tools/CreateCourse'

import { getSession } from '@lib/sessions'
import { getCourseListing } from '@services/archive'

export const metadata = {
  title: 'Tärpistö - TKO-äly ry',
  viewport: 'width=device-width',
  robots: {
    index: false
  }
}

const Page = async () => {
  const flash = {
    msg: 'toot',
    type: 'info'
  }

  const { user, rights } = await getSession()

  const courses = await getCourseListing()

  return (
    <>
      <ListingNavigation title="Courses" />
      <div className="page-container">
        <FlashMessage flash={flash} />
        <div>{JSON.stringify(user, null, 4)}</div>
        <div>{JSON.stringify(rights, null, 4)}</div>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <CourseList courses={courses} />
          </Suspense>
          <ControlsBox>
            {rights.upload && <CreateCourse />}
            <Logout username={user.username} />
          </ControlsBox>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Page
