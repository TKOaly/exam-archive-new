import { expect } from '@playwright/test'
import { test } from './fixtures'
import { CourseListItem, ExamListItem } from '../lib/types'
import { slugifyCourseName } from '../lib/courses'

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
    const heading = page.getByRole('heading', {
      name: `Introduction to testing -${workerIndex}-`
    })
    const uplaodButton = page.getByRole('link', { name: 'upload' })

    await expect(heading).toBeVisible()
    await expect(backButton).toBeVisible()
    await expect(uplaodButton).toBeVisible()

    await backButton.click()

    const redirectHeading = page.getByRole('heading', { name: 'Courses' })
    await expect(redirectHeading).toBeVisible()
  })

  test('examlisting headers are correct', async ({ page, courseList, isMobile }, {
    workerIndex
  }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const headers = page.getByRole('row', {
      name: `Icon Exam${isMobile ? ' ' : ' Upload date '}Manage`
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
    examList,
    isMobile
  }, { workerIndex }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const documentRow = await examList.getExamItemRowByName(
      `document-${workerIndex}.txt`
    )
    const documentIcon = documentRow.locator('img').nth(0)
    const name = documentRow.getByText(`document-${workerIndex}.txt`, { exact: true })
    const lastModified = documentRow.getByTestId(`upload-date-time${isMobile ? '-mobile' : ''}`)
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

    await expect(documentIcon).toHaveAttribute('src', new RegExp('icon-document'))
    await expect(name).toHaveAttribute(
      'href',
      `/exams/${documentExamId}/document-${workerIndex}.txt`
    )
    await expect(lastModified).toHaveText(`${new Date().toISOString().split('T')[0]}`)

    const pdfRow = await examList.getExamItemRowByName(`pdf-${workerIndex}.pdf`)
    const pdfIcon = pdfRow.locator('img').nth(0)

    await expect(pdfRow).toBeVisible()
    await expect(pdfIcon).toHaveAttribute('src', new RegExp('icon-pdf'))

    const imageRow = await examList.getExamItemRowByName(
      `image-${workerIndex}.png`
    )
    const imageIcon = imageRow.locator('img').nth(0)

    await expect(imageRow).toBeVisible()
    await expect(imageIcon).toHaveAttribute('src', new RegExp('icon-photo'))
  })

  test('upload exam navigation is correct', async ({ page, examList }, {
    workerIndex
  }) => {
    await examList.gotoUploadByName(`Introduction to testing -${workerIndex}-`)

    const backButton = page.getByLabel(`Back to course "Introduction to testing -${workerIndex}-"`)
    const heading = page.getByRole('heading', {
      name: `Upload exam to Introduction to testing -${workerIndex}-`
    })

    await expect(heading).toBeVisible()
    await expect(backButton).toBeVisible()

    await backButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*upload.*\b).*$'))

    const redirectHeading = page.getByRole('heading', { name: `Introduction to testing -${workerIndex}-` })
    await expect(redirectHeading).toBeVisible()
  })

  test('manage exam navigation is correct', async ({ page, courseList, examList }, {
    workerIndex
  }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const row = await examList.getExamItemRowByName(`document-${workerIndex}.txt`)
    const examId = await row.getAttribute('data-exam-id') as string
    await examList.gotoExamManagement(
      parseInt(examId), `document-${workerIndex}.txt`
    )

    const backButton = page.getByLabel(`Back to course "Introduction to testing -${workerIndex}-"`)
    const heading = page.getByRole('heading', {
      name: `Manage exam document-${workerIndex}.txt`
    })

    await expect(heading).toBeVisible()
    await expect(backButton).toBeVisible()

    await backButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*manage.*\b).*$'))

    const redirectHeading = page.getByRole('heading', { name: `Introduction to testing -${workerIndex}-` })
    await expect(redirectHeading).toBeVisible()
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

  test('upload new file via modal works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    await examList.openUploadModal()

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

    await page.waitForURL(new RegExp('^(?!\b.*upload.*\b).*$'))

    const row = await examList.getExamItemRowByName(filename)
    await expect(row).toBeVisible()

    const modal = page.getByTestId('modal')
    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('upload new file works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await examList.gotoUploadByName(`Introduction to testing ${testId}`)

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
    await examList.gotoUploadByName(`Introduction to testing ${testId}`)

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

  test('rename exam via modal works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    await expect(row).toBeVisible()

    const manageButton = row.getByRole('link', {
      name: `Manage exam "existing-${testId}.pdf"`
    })
    await manageButton.click()

    const modal = page.getByTestId('modal')

    const renameInput = modal.locator('input[name="examName"]')
    const renameButton = modal.getByRole('button', {
      name: `Rename exam "existing-${testId}.pdf"`
    })

    const newFilename = `renamed-${testId}.pdf`
    await renameInput.fill(newFilename)
    await renameButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*manage.*\b).*$'))

    const newRow = await examList.getExamItemRowByName(newFilename)
    const name = newRow.getByText(newFilename, { exact: true })
    await expect(name).toBeVisible()

    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('rename exam works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    await expect(row).toBeVisible()

    const examId = await row.getAttribute('data-exam-id') as string
    await examList.gotoExamManagement(parseInt(examId), `existing-${testId}.pdf`)

    const renameInput = page.locator('input[name="examName"]')
    const renameButton = page.getByRole('button', {
      name: `Rename exam "existing-${testId}.pdf"`
    })

    const newFilename = `renamed-${testId}.pdf`
    await renameInput.fill(newFilename)
    await renameButton.click()

    const newRow = await examList.getExamItemRowByName(newFilename)
    const name = newRow.getByText(newFilename, { exact: true })
    await expect(name).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('delete exam via modal works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    await expect(row).toBeVisible()

    const manageButton = row.getByRole('link', {
      name: `Manage exam "existing-${testId}.pdf"`
    })
    await manageButton.click()

    const modal = page.getByTestId('modal')
    const deleteButton = modal.getByRole('button', {
      name: `Delete exam "existing-${testId}.pdf"`
    })
    await deleteButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*manage.*\b).*$'))

    const newRow = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    await expect(newRow).not.toBeVisible()

    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been deleted.`)
    // await expect(success).toBeVisible()
  })

  test('delete exam works', async ({ page, courseList, examList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    await expect(row).toBeVisible()

    const examId = await row.getAttribute('data-exam-id') as string
    await examList.gotoExamManagement(parseInt(examId), `existing-${testId}.pdf`)

    const deleteButton = page.getByRole('button', {
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
    const name = row.getByText(`existing-${testId}.pdf`, { exact: true })

    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      name.click()
    ])

    await expect(page1).toBeDefined()
  })
})


