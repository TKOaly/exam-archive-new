import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import { parseSlug } from '@lib/courses'
import { getCourseInfo } from '@services/archive'

import Modal from '@components/Modal'
import RenameCourse from '@components/tools/RenameCourse'
import DeleteCourse from '@components/tools/DeleteCourse'
import { validateUserRights } from '@services/tkoUserService'

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
    title: `Manage - ${course.name} - Tärpistö - TKO-äly ry`,
    description: 'The TKO-äly ry exam archive'
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  await validateUserRights('rename', 'remove')

  const { id } = parseSlug(params.slug)

  const course = await getCourseInfo(id)

  if (!course) {
    notFound()
  }

  return (
    <Modal title={`Manage course "${course.name}"`}>
      <div
        aria-label={`Manage course "${course.name}"`}
        className="flex flex-col gap-8"
        data-course-id={course.id}
        data-course-name={course.name}
      >
        <RenameCourse courseId={course.id} currentName={course.name} />
        <DeleteCourse courseId={course.id} courseName={course.name} />
      </div>
    </Modal>
  )
}

export default Page
