import slugify from 'slugify'
import { notFound, redirect } from 'next/navigation'

export const slugifyCourseName = (courseName: string) => {
  return slugify(courseName.replace(/c\+\+/i, 'cpp'), {
    lower: true,
    replacement: '-',
    remove: /[^\w\d \-]/g
  })
}
export const urlForCourseListing = () => '/'

export const urlForCourse = (id: number, name: string) =>
  `/courses/${id}-${slugifyCourseName(name)}`

export const urlForCourseCreation = () => `/courses/create`

export const urlForCourseManagement = (id: number, name: string) =>
  `${urlForCourse(id, name)}/manage`

export const urlForFileUpload = (id: number, name: string) =>
  `${urlForCourse(id, name)}/upload`

export const urlForFile = (fileId: number, fileName: string) =>
  `/files/${fileId}/${fileName}`

export const urlForFileManagement = (fileId: number, fileName: string) =>
  `${urlForFile(fileId, fileName)}/manage`

export const parseSlug = (slug: string) => {
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

export const verifyCourseSlug = (id: number, name: string, slug: string) => {
  if (slug !== slugifyCourseName(name)) {
    redirect(urlForCourse(id, name))
  }
}
