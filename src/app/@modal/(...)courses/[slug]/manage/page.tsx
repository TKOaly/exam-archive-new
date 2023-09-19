import { notFound, redirect } from 'next/navigation'

// import { slugifyCourseName, urlForCourse } from '@lib/courses'
import { getCourseInfo } from '@services/archive'

import Modal from '@components/Modal'
import RenameCourse from '@components/tools/RenameCourse'
import DeleteCourse from '@components/tools/DeleteCourse'
import { validateRights } from '@services/tkoUserService'

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
  const isRights = await validateRights('rename', 'remove')

  if (!isRights) {
    redirect('/')
  }

  const { id, courseSlug } = parseSlug(params.slug)

  const course = await getCourseInfo(id)
  if (!course) {
    notFound()
  }

  // // if (courseSlug !== slugifyCourseName(course.name)) {
  // //   return redirect(urlForCourse(course.id, course.name))
  // // }

  return (
    <Modal title={`Manage course "${course.name}"`}>
      <div className="flex flex-col gap-8">
        <RenameCourse courseId={course.id} currentName={course.name} />
        <DeleteCourse courseId={course.id} courseName={course.name} />
      </div>
    </Modal>
  )
}

export default Page
