import { notFound, redirect } from 'next/navigation'

// import { slugifyCourseName, urlForCourse } from '@lib/courses'
import { getSession } from '@lib/sessions'
import { getCourseInfo } from '@services/archive'

import Modal from '@components/Modal'
import UploadExam from '@components/tools/UploadExam'

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
  const { rights } = await getSession()

  if (!rights.upload) {
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
    <Modal title="Upload exam">
      <div className="flex flex-col gap-8">
        <UploadExam courseId={id} />
      </div>
    </Modal>
  )
}

export default Page
