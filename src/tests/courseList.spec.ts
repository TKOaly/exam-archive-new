import { expect } from '@playwright/test'
import { test } from './fixtures'
import { CourseListItem, ExamListItem } from '../lib/types'
import { urlForCourse, urlForCourseListing } from '../lib/courses'

test.describe('courseList looks right', () => {
  let courses: CourseListItem[] = []
  let exams: ExamListItem[] = []

  test.beforeAll(async ({ request }, { workerIndex }) => {
    const introRes = await request.post('/api/courses/create', {
      data: { courseName: `Introduction to testing -${workerIndex}-` }
    })
    const introCourse: CourseListItem = await introRes.json()
    courses = [...courses, introCourse]

    const newExamsRes = await request.post('/api/exams/upload', {
      multipart: {
        courseId: introCourse.id,
        document: {
          name: `document-${workerIndex}.txt`,
          mimeType: 'text/plain',
          buffer: Buffer.from('This is a test.')
        },
        pdf: {
          name: `pdf-${workerIndex}.pdf`,
          mimeType: 'application/pdf',
          buffer: Buffer.from('This is a test.')
        },
        png: {
          name: `image-${workerIndex}.png`,
          mimeType: 'image/png',
          buffer: Buffer.from('This is a test.')
        }
      }
    })
    const newExams: ExamListItem[] = await newExamsRes.json()

    exams = [...exams, ...newExams]

    const advancedRes = await request.post('/api/courses/create', {
      data: { courseName: `Advanced course in Testing -${workerIndex}-` }
    })
    const advanced: CourseListItem = await advancedRes.json()
    courses = [...courses, advanced]
  })

  test.afterAll(async ({ request }) => {
    await Promise.all(
      exams.map(
        async exam =>
          await request.post(`/api/exams/delete`, {
            data: {
              examId: exam.id
            }
          })
      )
    )

    await Promise.all(
      courses.map(
        async course =>
          await request.post(`/api/courses/delete`, {
            data: { courseId: course.id }
          })
      )
    )
  })

  test('courselisting navigation heading is correct', async ({
    courseList,
    page
  }) => {
    await courseList.goto()

    const heading = page.getByRole('heading', { name: 'Courses' })
    await expect(heading).toBeVisible()
  })

  test('courselisting headers are correct', async ({ courseList, page, isMobile }) => {
    await courseList.goto()

    const headers = page.getByRole('row', {
      name: `Icon Course${isMobile ? ' ' : ' Last modified '}Manage`
    })
    await expect(headers).toBeVisible()
  })

  test('courselisting row is correct', async ({ courseList, page, isMobile }, {
    workerIndex,
  }) => {
    await courseList.goto()

    const row = await courseList.getCourseItemRowByName(
      `Introduction to testing -${workerIndex}-`
    )
    const folderIcon = row.locator('svg').first()
    const name = row.getByText(`Introduction to testing -${workerIndex}-`, { exact: true })
    const lastModified = row.getByTestId(`last-modified-time${isMobile ? '-mobile' : ''}`)
    const manage = row.getByRole('link', { name: 'manage' })
    const manageIcon = manage.locator('svg').first()

    await expect(row).toBeVisible()
    await expect(folderIcon).toBeVisible()
    await expect(name).toBeVisible()
    await expect(lastModified).toBeVisible()
    await expect(manage).toBeVisible()
    await expect(manageIcon).toBeVisible()

    await expect(lastModified).toHaveText(`${new Date().toISOString().split('T')[0]}`)

    const courseId = await page.getAttribute(
      `[data-course-name="Introduction to testing -${workerIndex}-"]`,
      'data-course-id'
    ) as string

    await expect(name).toHaveAttribute(
      'href',
      `${urlForCourse(parseInt(courseId), `Introduction to testing -${workerIndex}-`)}`
    )
    await expect(manage).toHaveAttribute(
      'href',
      `${urlForCourse(parseInt(courseId), `Introduction to testing -${workerIndex}-`)}/manage`
    )
  })

  test('courselisting row hides last modified if no exams', async ({
    courseList
  }, { workerIndex }) => {
    await courseList.goto()

    const row = await courseList.getCourseItemRowByName(
      `Advanced course in Testing -${workerIndex}-`
    )
    const lastModified = row.getByTestId('last-modified')
    await expect(row).toBeVisible()
    await expect(row).toHaveText(`Advanced course in Testing -${workerIndex}- Manage course "Advanced course in Testing -${workerIndex}-"`)
    await expect(lastModified).toBeEmpty()
  })
})

// test('examList screenshot testing', async ({ page }) => {
//   await page.goto('/')
//   await expect(page).toHaveScreenshot({
//     fullPage: true
//   })
// })

test.describe('courselisting functions works', () => {
  test.beforeEach(async ({ request }, { testId }) => {
    const introRes = await request.post('/api/courses/create', {
      data: { courseName: `Introduction to testing ${testId}` }
    })
    const introCourse: CourseListItem = await introRes.json()

    await request.post('/api/exams/upload', {
      multipart: {
        courseId: introCourse.id,
        pdf: {
          name: `existing-${testId}.pdf`,
          mimeType: 'application/pdf',
          buffer: Buffer.from('This is a test.')
        }
      }
    })
  })

  test.afterEach(async ({ request }, { testId }) => {
    const exams: ExamListItem[] = await (await request.get('/api/exams')).json()
    await Promise.all(
      exams
        .filter(exam => exam.fileName.includes(testId))
        .map(
          async exam =>
            await request.post(`/api/exams/delete`, {
              data: {
                examId: exam.id
              }
            })
        )
    )

    const courses: CourseListItem[] = await (
      await request.get('/api/courses')
    ).json()
    await Promise.all(
      courses
        .filter(course => course.name.includes(testId))
        .map(
          async course =>
            await request.post(`/api/courses/delete`, {
              data: { courseId: course.id }
            })
        )
    )
  })

  test('add a new course via modal works', async ({ page, courseList }, {
    testId
  }) => {
    await courseList.gotoCourseCreationModal()

    const title = page.getByRole('heading', {
      name: 'Create new course'
    })
    const heading = page.getByText('Add a new course')
    const courseName = page.getByPlaceholder('Course name')
    const createCourse = page.getByText('Create course')

    await expect(title).toBeVisible()
    await expect(heading).toBeVisible()
    await expect(courseName).toBeVisible()
    await expect(createCourse).toBeVisible()

    const name = `Introduction to course creation ${testId}`

    await courseName.fill(name)
    await createCourse.click()

    await page.waitForURL(/introduction-to-course-creation/)

    const modal = page.getByTestId('modal')
    await expect(modal).not.toBeVisible()

    // Disabled as https://github.com/vercel/next.js/issues/42784#issuecomment-1311778290 needs investigation
    // await expect(page).toHaveTitle(`${name} - Tärpistö - TKO-äly ry`)

    // Disabled as flash messages are not shown yet
    // const success = page.getByText(
    //   `Course "Introduction to testing ${testIdentifier}" created!`
    // )
    // await expect(success).toBeVisible()
  })

  test('add a new course works', async ({ page, courseList }, {
    testId
  }) => {
    await courseList.gotoCourseCreation()

    const title = page.getByRole('heading', {
      name: 'Create new course'
    })
    const heading = page.getByText('Add a new course')
    const courseName = page.getByPlaceholder('Course name')
    const createCourse = page.getByText('Create course')

    await expect(title).toBeVisible()
    await expect(heading).toBeVisible()
    await expect(courseName).toBeVisible()
    await expect(createCourse).toBeVisible()

    const name = `Introduction to course creation ${testId}`

    await courseName.fill(name)
    await createCourse.click()

    await page.waitForURL(/introduction-to-course-creation/)

    // Disabled as https://github.com/vercel/next.js/issues/42784#issuecomment-1311778290 needs investigation
    // await expect(page).toHaveTitle(`${name} - Tärpistö - TKO-äly ry`)

    // Disabled as flash messages are not shown yet
    // const success = page.getByText(
    //   `Course "Introduction to testing ${testIdentifier}" created!`
    // )
    // await expect(success).toBeVisible()
  })

  test('rename course via modal works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseManagementModalByName(`Introduction to testing ${testId}`)

    const courseRenameInput = page.locator('input[name="courseName"]')
    const courseRenameButton = page.getByRole('button', {
      name: `Rename course "Introduction to testing ${testId}"`
    })

    await courseRenameInput.fill(`Advanced course in naming ${testId}`)
    await courseRenameButton.click()

    await page.waitForURL(urlForCourseListing())

    const row = await courseList.getCourseItemRowByName(`Advanced course in naming ${testId}`)
    await expect(row).toBeVisible()

    const modal = page.getByTestId('modal')
    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Course has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('rename course works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseManagementByName(`Introduction to testing ${testId}`)

    const courseRenameInput = page.locator('input[name="courseName"]')
    const courseRenameButton = page.getByRole('button', {
      name: `Rename course "Introduction to testing ${testId}"`
    })

    await courseRenameInput.fill(`Advanced course in naming ${testId}`)
    await courseRenameButton.click()

    await page.waitForURL(urlForCourseListing())

    const row = await courseList.getCourseItemRowByName(`Advanced course in naming ${testId}`)
    await expect(row).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Course has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('delete course via modal works if no exams currently', async ({
    page,
    courseList
  }, { testId }) => {
    await courseList.goto()
    await courseList.createCourse(`Introduction to naming ${testId}`)

    await page.waitForURL(/introduction-to-naming/)

    await courseList.gotoCourseManagementModalByName(`Introduction to naming ${testId}`)

    const courseDeleteButton = page.getByRole('button', {
      name: `Delete course "Introduction to naming ${testId}"`
    })
    await courseDeleteButton.click()

    await page.waitForURL(urlForCourseListing())

    const heading = page.getByRole('heading', { name: 'Courses' })
    await expect(heading).toBeVisible()

    const modal = page.getByTestId('modal')
    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(
    //   `The course "Introduction to naming ${testId}" has been deleted.`
    // )
    // await expect(success).toBeVisible()
  })

  test('delete course works if no exams currently', async ({
    page,
    courseList
  }, { testId }) => {
    await courseList.goto()
    await courseList.createCourse(`Introduction to naming ${testId}`)
    await page.waitForURL(/introduction-to-naming/)

    await courseList.gotoCourseManagementByName(`Introduction to naming ${testId}`)

    const courseDeleteButton = page.getByRole('button', {
      name: `Delete course "Introduction to naming ${testId}"`
    })
    await courseDeleteButton.click()

    await page.waitForURL(urlForCourseListing())

    const heading = page.getByRole('heading', { name: 'Courses' })
    await expect(heading).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(
    //   `The course "Introduction to naming ${testId}" has been deleted.`
    // )
    // await expect(success).toBeVisible()
  })

  test('delete course throws error if exams currently', async ({
    page,
    courseList
  }, { testId }) => {
    await courseList.gotoCourseManagementByName(`Introduction to testing ${testId}`)

    const courseDeleteButton = page.getByRole('button', {
      name: `Delete course`
    })
    await courseDeleteButton.click()

    const heading = page.getByRole('heading', {
      name: `Introduction to testing ${testId}`
    })
    await expect(heading).toBeVisible()

    // Flash messages not implemented yet
    // const error = page.getByText(`Cannot delete a course with exam documents.`)
    // await expect(error).toBeVisible()
  })
})
