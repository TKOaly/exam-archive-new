import { redirect } from 'next/navigation'

import { parseSlug } from '@lib/courses'
import { getCourseInfo } from '@services/archive'

import UploadFiles from '@components/tools/UploadFiles'
import { validateRights } from '@services/tkoUserService'

const Page = async ({ params }: any) => {
  const isRights = await validateRights('upload')

  const { id } = parseSlug(params.slug)

  const course = await getCourseInfo(id)

  if (!isRights) {
    redirect('/')
  }

  return (
    <div
      className="content-container flex flex-col gap-8 pb-5"
      data-course-id={course.id}
      data-course-name={course.name}
    >
      <UploadFiles courseId={course.id} />
    </div>
  )
}

export default Page
