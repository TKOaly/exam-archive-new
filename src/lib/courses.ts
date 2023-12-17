import slugify from 'slugify'

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

export const urlForExamManagement = (fileId: number, fileName: string) =>
  `${urlForFile(fileId, fileName)}/manage`
