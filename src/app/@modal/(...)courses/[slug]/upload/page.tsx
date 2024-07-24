import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import { parseSlug } from '@lib/courses'
import { getCourseInfo } from '@services/archive'

import Modal from '@components/Modal'
import UploadFiles from '@components/tools/UploadFiles'
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
    title: `Upload files - ${course.name} - Tärpistö - TKO-äly ry`,
    description: 'The TKO-äly ry exam archive'
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  await validateUserRights('upload')

  const { id } = parseSlug(params.slug)

  const course = await getCourseInfo(id)

  if (!course) {
    notFound()
  }

  return (
    <Modal title={`Upload files to "${course.name}"`}>
      <div
        aria-label={`Upload files to "${course.name}"`}
        className="flex flex-col gap-8"
        data-course-id={course.id}
        data-course-name={course.name}
      >
        <UploadFiles courseId={id} />
      </div>
    </Modal>
  )
}

export default Page
