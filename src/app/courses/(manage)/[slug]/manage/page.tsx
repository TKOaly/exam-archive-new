import { redirect } from 'next/navigation'

import { parseSlug } from '@lib/courses'
import { getCourseInfo } from '@services/archive'

import DeleteCourse from '@components/tools/DeleteCourse'
import RenameCourse from '@components/tools/RenameCourse'
import { validateRights } from '@services/tkoUserService'

const Page = async ({ params }: any) => {
  const isRights = await validateRights('rename', 'remove')

  if (!isRights) {
    redirect('/')
  }

  const { id } = parseSlug(params.slug)

  const course = await getCourseInfo(id)

  return (
    <div className="content-container flex flex-col gap-8 pb-5">
      <RenameCourse courseId={course.id} currentName={course.name} />
      <DeleteCourse courseId={course.id} courseName={course.name} />
    </div>
  )
}

export default Page
