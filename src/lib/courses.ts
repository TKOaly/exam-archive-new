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

export const urlForExamUpload = (id: number, name: string) =>
  `${urlForCourse(id, name)}/upload`

export const urlForExam = (examId: number, fileName: string) =>
  `/exams/${examId}/${fileName}`

export const urlForExamManagement = (examId: number, fileName: string) =>
  `${urlForExam(examId, fileName)}/manage`
