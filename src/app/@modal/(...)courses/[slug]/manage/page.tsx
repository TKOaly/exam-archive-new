import { redirect } from 'next/navigation'

import { parseSlug } from '@lib/courses'
import { getCourseInfo } from '@services/archive'

import Modal from '@components/Modal'
import RenameCourse from '@components/tools/RenameCourse'
import DeleteCourse from '@components/tools/DeleteCourse'
import { validateRights } from '@services/tkoUserService'

const Page = async ({ params }: any) => {
  const isRights = await validateRights('rename', 'remove')

  if (!isRights) {
    redirect('/')
  }

  const { id } = parseSlug(params.slug)

  const course = await getCourseInfo(id)

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
