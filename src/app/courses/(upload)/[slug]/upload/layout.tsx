import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { urlForCourse } from '@lib/courses'
import { getCourseInfo } from '@services/archive'

import ListingNavigation from '@components/Navigation'

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

export const generateMetadata = async ({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const { id } = parseSlug(params.slug)
  const course = await getCourseInfo(id)

  if (!course) {
    notFound()
  }

  return {
    title: `Upload exam - ${course.name} - Tärpistö - TKO-äly ry`,
    description: 'The TKO-äly ry exam archive'
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
      <ListingNavigation
        title={`Upload exam to ${course.name}`}
        label={`Back to course "${course.name}"`}
        backButtonHref={urlForCourse(course.id, course.name)}
      ></ListingNavigation>
      <div className="page-container">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
