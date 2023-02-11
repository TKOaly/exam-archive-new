const React = require('react')

const Layout = require('./common/Layout')
const Footer = require('./common/Footer')
const FlashMessage = require('./common/FlashMessage')
const { UserContextProvider } = require('./common/context')
const ListingNavigation = require('./common/ListingNavigation')
const ExamList = require('./common/ExamList')
const { ControlsBox, Logout } = require('./common/Controls')
const UploadExamForm = require('./common/forms/UploadExamForm')

const CoursePage = ({
  flash,
  course,
  exams,
  previousPageUrl,
  username,
  userRights
}) => {
  return (
    <Layout title={course.name} flash={flash}>
      <UserContextProvider
        username={username}
        canDelete={userRights.remove}
        canRename={userRights.rename}
      >
        <ListingNavigation title={course.name} backButtonHref="/archive" />
        <div className="page-container">
          <FlashMessage flash={flash} />
          <main>
            <ExamList courseId={course.id} exams={exams} />

            <ControlsBox>
              {userRights.upload && <UploadExamForm courseId={course.id} />}
              {userRights.rename && (
                <>
                  <h3>Rename course</h3>
                  <button
                    data-rename-course-button
                    data-current-name={course.name}
                    data-id={course.id}
                  >
                    rename
                  </button>
                </>
              )}
              {userRights.remove && (
                <>
                  <h3>Delete course</h3>
                  <p>
                    Course can only be deleted after all exams have been
                    deleted.
                  </p>
                  <form
                    action={`/archive/delete-course/${course.id}`}
                    method="post"
                  >
                    <input type="submit" value="delete" />
                  </form>
                </>
              )}
              <Logout username={username} />
            </ControlsBox>
          </main>
          <Footer />
        </div>
      </UserContextProvider>
    </Layout>
  )
}

module.exports = CoursePage
