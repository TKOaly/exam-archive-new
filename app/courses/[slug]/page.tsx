import { notFound, redirect } from 'next/navigation'

import ExamList from '@components/ExamList'

import { slugifyCourseName, urlForCourse } from '@lib/courses'

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

const Page = async ({ params }: any) => {
  const { id, courseSlug } = parseSlug(params.slug)

  // if (courseSlug !== slugifyCourseName(course.name)) {
  //   return redirect(urlForCourse(course.id, course.name))
  // }

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ExamList courseId={id} />
    </>
  )
}

export default Page
