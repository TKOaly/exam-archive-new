import { expect } from '@playwright/test'
import { test } from './fixtures'
import { CourseListItem, ExamListItem } from '../lib/types'

test.describe('examList looks right', () => {
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

  test('examlisting works', async ({ page, courseList }, { workerIndex }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const heading = page.getByRole('heading', {
      name: `Introduction to testing -${workerIndex}-`
    })
    await expect(heading).toBeVisible()

    await expect(page).toHaveTitle(
      `Introduction to testing -${workerIndex}- - Tärpistö - TKO-äly ry`
    )
  })

  test('back to course list button works', async ({ page, courseList }, {
    workerIndex
  }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const backButton = page.locator('[aria-label="Back to course listing"]')
    await expect(backButton).toBeVisible()

    await backButton.click()

    const heading = page.getByRole('heading', { name: 'Courses' })
    await expect(heading).toBeVisible()
  })

  test('examlisting headers are correct', async ({ page, courseList }, {
    workerIndex
  }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const headers = page.getByRole('row', {
      name: 'Exam Upload date'
    })
    await expect(headers).toBeVisible()
  })

  test('if no exams added, show no exams found', async ({ page, courseList }, {
    workerIndex
  }) => {
    await courseList.gotoCourseByName(
      `Advanced course in Testing -${workerIndex}-`
    )

    const notification = page.getByText(`No exams found.`)
    await expect(notification).toBeVisible()
  })

  test('examlisting row is correct with correct icon', async ({
    page,
    courseList,
    examList
  }, { workerIndex }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const documentRow = await examList.getExamItemRowByName(
      `document-${workerIndex}.txt`
    )
    const documentIcon = documentRow.locator('img').nth(0)
    const name = documentRow.locator('a', {
      hasText: `document-${workerIndex}.txt`
    })
    const lastModified = documentRow.locator('time', {
      hasText: `${new Date().toISOString().split('T')[0]}`
    })
    const documentExamId = await page.getAttribute(
      `[data-exam-name="document-${workerIndex}.txt"]`,
      'data-exam-id'
    )
    const manageButton = documentRow.getByTitle(
      `Manage exam "document-${workerIndex}.txt"`
    )

    await expect(documentRow).toBeVisible()
    await expect(name).toBeVisible()
    await expect(lastModified).toBeVisible()
    await expect(manageButton).toBeVisible()

    await expect(documentIcon).toHaveAttribute('src', '/img/icon-document.svg')
    await expect(name).toHaveAttribute(
      'href',
      `/exams/${documentExamId}/document-${workerIndex}.txt`
    )

    const pdfRow = await examList.getExamItemRowByName(`pdf-${workerIndex}.pdf`)
    const pdfIcon = pdfRow.locator('img').nth(0)

    await expect(pdfRow).toBeVisible()
    await expect(pdfIcon).toHaveAttribute('src', '/img/icon-pdf.svg')

    const imageRow = await examList.getExamItemRowByName(
      `image-${workerIndex}.png`
    )
    const imageIcon = imageRow.locator('img').nth(0)

    await expect(imageRow).toBeVisible()
    await expect(imageIcon).toHaveAttribute('src', '/img/icon-photo.svg')
  })

  test('controls is correct', async ({ page, courseList }, { workerIndex }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const box = page.getByTestId('controls')

    await expect(box).toBeVisible()

    const uploadHeader = box.getByRole('heading', {
      name: 'Upload a new file here:'
    })
    const uploadInput = box.getByRole('textbox', { name: 'File' })
    const uploadButton = box.getByRole('button', { name: 'Upload' })

    const renameHeader = box.getByRole('heading', { name: 'Rename course' })
    const renameButton = box.getByRole('button', { name: 'rename' })

    const deleteHeader = box.getByRole('heading', { name: 'Delete course' })
    const deleteSubHeader = box.getByText(
      'Course can only be deleted after all exams have been deleted.'
    )
    const deleteButton = box.getByRole('button', { name: 'delete' })

    const loggedIn = box.getByText('Logged in: dev (Log out)')
    const logoutLink = loggedIn.locator('a', { hasText: 'Log out' })

    await expect(uploadHeader).toBeVisible()
    await expect(uploadInput).toBeVisible()
    await expect(uploadButton).toBeVisible()

    await expect(renameHeader).toBeVisible()
    await expect(renameButton).toBeVisible()

    await expect(deleteHeader).toBeVisible()
    await expect(deleteSubHeader).toBeVisible()
    await expect(deleteButton).toBeVisible()

    await expect(loggedIn).toBeVisible()
    await expect(logoutLink).toHaveAttribute('href', '/auth/signout')
  })
})

// test('examList screenshot testing', async ({ page }) => {
//   await page.goto('/archive/3-advanced-course-in-machine-learning')
//   await expect(page).toHaveScreenshot({
//     fullPage: true
//   })
// })

test.describe('examlisting functions right', () => {
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

  test('upload new file works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const fileInput = page.locator("input[type='file']")
    await expect(fileInput).toBeVisible()

    const filename = `${testId}.pdf`

    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
    await fileInput.setInputFiles({
      name: filename,
      mimeType: 'application/pdf',
      buffer: Buffer.from('Test file.')
    })

    const uploadButton = page.getByRole('button', { name: 'Upload exam' })
    await expect(uploadButton).toBeVisible()
    await uploadButton.click()

    await test.slow() // add timeout for making sure file is uploaded

    const row = await examList.getExamItemRowByName(filename)
    await expect(row).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('upload multiple file works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const fileInput = page.locator("input[type='file']")
    await expect(fileInput).toBeVisible()

    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
    await fileInput.setInputFiles([
      {
        name: `${testId}-1.pdf`,
        mimeType: 'application/pdf',
        buffer: Buffer.from('Test file.')
      },
      {
        name: `${testId}-2.pdf`,
        mimeType: 'application/pdf',
        buffer: Buffer.from('Test file.')
      }
    ])

    const uploadButton = page.getByRole('button', { name: 'Upload exam' })
    await expect(uploadButton).toBeVisible()
    await uploadButton.click()

    await test.slow() // add timeout for making sure file is uploaded

    const row1 = await examList.getExamItemRowByName(`${testId}-1.pdf`)
    await expect(row1).toBeVisible()

    const row2 = await examList.getExamItemRowByName(`${testId}-2.pdf`)
    await expect(row2).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('rename exam works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    await expect(row).toBeVisible()

    const manageButton = row.getByRole('button', {
      name: `Manage exam "existing-${testId}.pdf"`
    })
    await manageButton.click()

    const renameInput = row.locator('input[name="examName"]')
    const renameButton = row.getByRole('button', {
      name: `Rename exam "existing-${testId}.pdf"`
    })

    const newFilename = `renamed-${testId}.pdf`
    await renameInput.fill(newFilename)
    await renameButton.click()

    const newRow = await examList.getExamItemRowByName(newFilename)
    const name = newRow.locator('a', {
      hasText: newFilename
    })
    await expect(name).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('delete exam works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    await expect(row).toBeVisible()

    const manageButton = row.getByRole('button', {
      name: `Manage exam "existing-${testId}.pdf"`
    })
    await manageButton.click()

    const deleteButton = row.getByRole('button', {
      name: `Delete exam "existing-${testId}.pdf"`
    })
    await deleteButton.click()

    const newRow = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    await expect(newRow).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been deleted.`)
    // await expect(success).toBeVisible()
  })

  test('opening exam makes popup like pdf viewer etc', async ({
    page,
    courseList,
    examList
  }, { testId }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    const name = row.locator('a', {
      hasText: `existing-${testId}.pdf`
    })

    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      name.click()
    ])

    await expect(page1).toBeDefined()
  })
})


