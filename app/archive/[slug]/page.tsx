import { Suspense } from 'react'
import { notFound, redirect } from 'next/navigation'

import Footer from '@components/Footer'
// import FlashMessage from '@components/FlashMessage'
import ListingNavigation from '@components/Navigation'
import ExamList from '@components/ExamList'
import { ControlsBox, Logout } from '@components/Controls'
import UploadExam from '@components/tools/UploadExam'

import { slugifyCourseName, urlForCourse } from '@lib/courses'

import RenameCourse from '@components/tools/RenameCourse'
import DeleteCourse from '@components/tools/DeleteCourse'

import { getSession } from '@lib/sessions'
import { getCourseInfo } from '@services/archive'
import { Metadata } from 'next'

const parseSlug = (slug: string) => {
  const parsedSlug = slug.match(/(?<id>\d+)-(?<courseSlug>.*)/)
  if (!parsedSlug || !parsedSlug.groups) {
    notFound()
  }

  const id = parseInt(parsedSlug.groups.id, 10)

  if (isNaN(id)) {
    notFound()
  }

  return {
    id,
    courseSlug: parsedSlug.groups.courseSlug
  }
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const { id, courseSlug } = parseSlug(params.slug)
  const course = await getCourseInfo(id)

  if (!course) {
    notFound()
  }

  return {
    title: `${course.name} - Tärpistö - TKO-äly ry`,
    viewport: 'width=device-width'
  }
}

const Page = async ({ params }: any) => {
  const { user, rights } = await getSession()

  // const flash = {
  //   msg: 'toot',
  //   type: 'info'
  // }

  const { id, courseSlug } = parseSlug(params.slug)

  const course = await getCourseInfo(id)
  if (!course) {
    notFound()
  }

  // if (courseSlug !== slugifyCourseName(course.name)) {
  //   return redirect(urlForCourse(course.id, course.name))
  // }

  return (
    <>
      <ListingNavigation title={course.name} backButtonHref="/" />
      <div className="page-container">
        {/* <FlashMessage flash={flash} /> */}
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <ExamList
              courseId={course.id}
              courseName={course.name}
              exams={course.exams}
              rights={rights}
            />
          </Suspense>
          <ControlsBox>
            {rights.upload && <UploadExam courseId={course.id} />}
            {rights.rename && (
              <RenameCourse currentName={course.name} courseId={course.id} />
            )}
            {rights.remove && (
              <DeleteCourse courseId={course.id} courseName={course.name} />
            )}
            <Logout username={user.username} />
          </ControlsBox>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Page
