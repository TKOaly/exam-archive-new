import { notFound, redirect } from 'next/navigation'

// import { slugifyCourseName, urlForCourse } from '@lib/courses'
import { getCourseInfo } from '@services/archive'

import Modal from '@components/Modal'
import UploadFiles from '@components/tools/UploadFiles'
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
  const isRights = await validateRights('upload')

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
