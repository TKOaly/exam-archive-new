const React = require('react')

const Layout = require('./common/Layout')
const Footer = require('./common/Footer')
const FlashMessage = require('./common/FlashMessage')
const ListingNavigation = require('./common/ListingNavigation')
const CourseList = require('./common/CourseList')
const { ControlsBox, Logout } = require('./common/Controls')
const CreateCourseForm = require('./common/forms/CreateCourseForm')

const IndexPage = ({ flash, courses, username, userRights }) => {
  return (
    <Layout>
      <ListingNavigation title="Courses" />
      <div className="page-container">
        <FlashMessage flash={flash} />
        <main>
          <CourseList
            courses={courses}
            showDelete={userRights.remove}
            showRename={userRights.rename}
          />
          <ControlsBox>
            {userRights.upload && <CreateCourseForm />}
            <Logout username={username} />
          </ControlsBox>
        </main>
        <Footer />
      </div>
    </Layout>
  )
}

module.exports = IndexPage
