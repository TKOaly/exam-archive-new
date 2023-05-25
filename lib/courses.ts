import slugify from 'slugify'

export const slugifyCourseName = (courseName: string) => {
  return slugify(courseName.replace(/c\+\+/i, 'cpp'), {
    lower: true,
    replacement: '-',
    remove: /[^\w\d \-]/g
  })
}

export const urlForCourse = (id: number, name: string) =>
  `/courses/${id}-${slugifyCourseName(name)}`

export const urlForCourseListing = () => '/'
