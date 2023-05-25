import '@styles/main.scss'
import React from 'react'
import ListingNavigation from '@components/Navigation'
import { ControlsBox, Logout } from '@components/Controls'
import UploadExam from '@components/tools/UploadExam'
import RenameCourse from '@components/tools/RenameCourse'
import DeleteCourse from '@components/tools/DeleteCourse'
import { notFound } from 'next/navigation'
import { getCourseInfo } from '@services/archive'

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

const Layout = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  const { id } = parseSlug(params.slug)
  const course = await getCourseInfo(id)

  if (!course) {
    notFound()
  }

  return (
    <>
      <ListingNavigation title={course.name} backButtonHref="/" />
      <div className="page-container">
        <main>
          {children}
          <ControlsBox>
            {/* @ts-expect-error Server Component */}
            <UploadExam courseId={course.id} />
            {/* @ts-expect-error Server Component */}
            <RenameCourse courseId={course.id} currentName={course.name} />
            {/* @ts-expect-error Server Component */}
            <DeleteCourse courseId={course.id} courseName={course.name} />
            {/* @ts-expect-error Server Component */}
            <Logout />
          </ControlsBox>
        </main>
      </div>
    </>
  )
}

export default Layout
