import Footer from '@components/Footer'
import FlashMessage from '@components/FlashMessage'
// const { UserContextProvider } = require('./common/context')
import ListingNavigation from '@components/Navigation'
import ExamList from '@components/ExamList'
import { ControlsBox, Logout } from '@components/Controls'
import UploadExamForm from '@components/forms/UploadExamForm'

import { getCourseInfo } from '@services/archive'
import { slugifyCourseName } from '@utilities/courses'
import { examDownloadUrl } from '@utilities/exams'

export const metadata = {
  title: 'placeholder - Tärpistö - TKO-äly ry'
}

const Page = async ({ params }: any) => {
  const flash = {
    msg: 'toot',
    type: 'info'
  }

  const parsedParams = params.slug.match(/(?<id>\d+)-(?<courseSlug>.*)/)
  const { id: unparsedId, courseSlug } = parsedParams.groups

  const id = parseInt(unparsedId, 10)
  if (isNaN(id)) {
    return <></>
  }

  const course = await getCourseInfo(id)

  if (!course) {
    return <></>
  }

  if (courseSlug !== slugifyCourseName(course.name)) {
    // return res.redirect(302, urlForCourse(course.id, course.name))
  }

  const exams = course.exams.map(exam => ({
    ...exam,
    downloadUrl: examDownloadUrl(exam.id, exam.fileName)
  }))

  const username = 'toot'
  const userRights = { remove: true, rename: true, upload: true }

  return (
    <>
      {/* <UserContextProvider
        username={username}
        canDelete={userRights.remove}
        canRename={userRights.rename}
      > */}
      <ListingNavigation title={course.name} backButtonHref="/" />
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
                  Course can only be deleted after all exams have been deleted.
                </p>
                <form action={`/api/course/delete/${course.id}`} method="post">
                  <input type="submit" value="delete" />
                </form>
              </>
            )}
            <Logout username={username} />
          </ControlsBox>
        </main>
        <Footer />
      </div>
      {/* </UserContextProvider> */}
    </>
  )
}

export default Page
