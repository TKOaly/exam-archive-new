import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Link from 'next/link'

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
    title: `${course.name} - Tärpistö - TKO-äly ry`,
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
    <div className='page-container bg-gray-50 shadow-lg'>
      <ListingNavigation
        title={course.name}
        backButtonHref="/"
        label="Back to course listing"
      >
        <Link
          href={`${urlForCourse(course.id, course.name)}/upload`}
          className="box-border bg-transparent p-3 font-serif lowercase text-gray-800 shadow-lg ring ring-inset ring-gray-800 hover:bg-gray-600 hover:text-white focus:ring-gray-400"
        >
          upload
        </Link>
      </ListingNavigation>
      {children}
    </div>
  )
}

export default Layout
