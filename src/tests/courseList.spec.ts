import { expect } from '@playwright/test'
import { test } from './fixtures'
import { CourseListItem, ExamListItem } from '../lib/types'

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

  test('courselisting headers are correct', async ({ courseList, page }) => {
    await courseList.goto()

    const headers = page.getByRole('row', { name: 'Course Last modified' })
    await expect(headers).toBeVisible()
  })

  test('courselisting row is correct', async ({ courseList, page }, {
    workerIndex
  }) => {
    await courseList.goto()

    const row = await courseList.getCourseItemRowByName(
      `Introduction to testing -${workerIndex}-`
    )
    const icon = row.locator('img')
    const name = row.locator('a', {
      hasText: `Introduction to testing -${workerIndex}-`
    })
    const lastModified = row.locator('time', {
      hasText: `${new Date().toISOString().split('T')[0]}`
    })

    await expect(row).toBeVisible()
    await expect(name).toBeVisible()
    await expect(lastModified).toBeVisible()

    const courseId = await page.getAttribute(
      `[data-course-name="Introduction to testing -${workerIndex}-"]`,
      'data-course-id'
    )

    await expect(icon).toHaveAttribute('src', '/img/icon-folder.svg')
    await expect(name).toHaveAttribute(
      'href',
      `/courses/${courseId}-introduction-to-testing-${workerIndex}`
    )
  })

  test('courselisting row hides last modified if no exams', async ({
    courseList
  }, { workerIndex }) => {
    await courseList.goto()

    const row = await courseList.getCourseItemRowByName(
      `Advanced course in Testing -${workerIndex}-`
    )
    const lastModified = row.locator('.course-list-item__last-modified')
    await expect(row).toBeVisible()
    await expect(row).toHaveText(`Advanced course in Testing -${workerIndex}-`)
    await expect(lastModified).toBeEmpty()
  })

  test('controls shows correct user logged in', async ({
    page,
    courseList
  }) => {
    await courseList.goto()

    const addBox = page.getByTestId('controls')
    const loggedIn = addBox.getByText('Logged in: dev (Log out)')
    const logoutLink = loggedIn.locator('a', { hasText: 'Log out' })

    await expect(addBox).toBeVisible()
    await expect(loggedIn).toBeVisible()
    await expect(logoutLink).toHaveAttribute('href', '/auth/signout')
  })
})

// test('examList screenshot testing', async ({ page }) => {
//   await page.goto('/')
//   await expect(page).toHaveScreenshot({
//     fullPage: true
//   })
// })

test.describe('courseList functions right', () => {
  test.afterEach(async ({ request }, { testId }) => {
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

  test('add a new course works', async ({ page, courseList, request }, {
    testId
  }) => {
    await courseList.goto()

    const addBox = page.getByTestId('controls')
    const heading = addBox.getByRole('heading', {
      name: 'Add a new course:'
    })
    const courseName = addBox.getByPlaceholder('Course name')
    const createCourse = addBox.getByText('Create course')

    await expect(addBox).toBeVisible()
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
})
