import { expect } from '@playwright/test'
import { test } from './fixtures'
import { CourseListItem, FileListItem } from '../lib/types'
import { urlForCourse } from '../lib/courses'
import { setAuthentication, getToken } from './utils'

test.describe('FileList looks right', () => {
  let courses: CourseListItem[] = []
  let files: FileListItem[] = []

  test.beforeAll(async ({ request }, { workerIndex }) => {
    const introRes = await request.post('/api/courses/create', {
      data: { courseName: `Introduction to testing -${workerIndex}-` }
    })
    const introCourse: CourseListItem = await introRes.json()
    courses = [...courses, introCourse]

    const newExamsFilesRes = await request.post('/api/files/upload', {
      multipart: {
        courseId: introCourse.id,
        type: 'exam',
        document: {
          name: `exam-document-${workerIndex}.txt`,
          mimeType: 'text/plain',
          buffer: Buffer.from('This is a test.')
        },
        pdf: {
          name: `exam-pdf-${workerIndex}.pdf`,
          mimeType: 'application/pdf',
          buffer: Buffer.from('This is a test.')
        },
        png: {
          name: `exam-image-${workerIndex}.png`,
          mimeType: 'image/png',
          buffer: Buffer.from('This is a test.')
        }
      }
    })
    const newExamsFiles: FileListItem[] = await newExamsFilesRes.json()

    files = [...files, ...newExamsFiles]

    const newNotesFilesRes = await request.post('/api/files/upload', {
      multipart: {
        courseId: introCourse.id,
        type: 'notes',
        pdf: {
          name: `notes-pdf-${workerIndex}.pdf`,
          mimeType: 'application/pdf',
          buffer: Buffer.from('This is a test.')
        }
      }
    })
    const newNotesFiles: FileListItem[] = await newNotesFilesRes.json()

    files = [...files, ...newNotesFiles]

    const newExercisesFilesRes = await request.post('/api/files/upload', {
      multipart: {
        courseId: introCourse.id,
        type: 'exercise',
        pdf: {
          name: `exercise-pdf-${workerIndex}.pdf`,
          mimeType: 'application/pdf',
          buffer: Buffer.from('This is a test.')
        }
      }
    })
    const newExercisesFiles: FileListItem[] = await newExercisesFilesRes.json()

    files = [...files, ...newExercisesFiles]

    const newOthersFilesRes = await request.post('/api/files/upload', {
      multipart: {
        courseId: introCourse.id,
        type: 'other',
        pdf: {
          name: `other-pdf-${workerIndex}.pdf`,
          mimeType: 'application/pdf',
          buffer: Buffer.from('This is a test.')
        }
      }
    })
    const newOthersFiles: FileListItem[] = await newOthersFilesRes.json()

    files = [...files, ...newOthersFiles]

    const advancedRes = await request.post('/api/courses/create', {
      data: { courseName: `Advanced course in Testing -${workerIndex}-` }
    })
    const advanced: CourseListItem = await advancedRes.json()
    courses = [...courses, advanced]
  })

  test.afterAll(async ({ request }) => {
    await Promise.all(
      files.map(
        async file =>
          await request.post(`/api/files/delete`, {
            data: {
              fileId: file.id
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

  test('FileListing works', async ({ page, courseList }, { workerIndex }) => {
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

  test('FileListing headers are correct', async ({ page, courseList }, {
    workerIndex
  }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const examsHeaders = page.getByLabel('Exams').getByRole('row', {
      name: `Icon File Upload date Manage`
    })
    await expect(examsHeaders).toBeVisible()

    const notesHeaders = page.getByLabel('Lecture notes').getByRole('row', {
      name: `Icon File Upload date Manage`
    })
    await expect(notesHeaders).toBeVisible()

    const exercisesHeaders = page.getByLabel('Exercises').getByRole('row', {
      name: `Icon File Upload date Manage`
    })
    await expect(exercisesHeaders).toBeVisible()

    const othersHeaders = page.getByLabel('Others').getByRole('row', {
      name: `Icon File Upload date Manage`
    })
    await expect(othersHeaders).toBeVisible()
  })

  test('FileListing headers are hidden if not files', async ({
    page,
    courseList
  }, { workerIndex }) => {
    await courseList.gotoCourseByName(
      `Advanced course in Testing -${workerIndex}-`
    )

    const examsHeaders = page.getByLabel('Exams').getByRole('row', {
      name: `Icon File Upload date Manage`
    })
    await expect(examsHeaders).not.toBeVisible()

    const notesHeaders = page.getByLabel('Exams').getByRole('row', {
      name: `Icon File Upload date Manage`
    })
    await expect(notesHeaders).not.toBeVisible()

    const exercisesHeaders = page.getByLabel('Exams').getByRole('row', {
      name: `Icon File Upload date Manage`
    })
    await expect(exercisesHeaders).not.toBeVisible()

    const othersHeaders = page.getByLabel('Exams').getByRole('row', {
      name: `Icon File Upload date Manage`
    })
    await expect(othersHeaders).not.toBeVisible()
  })

  test('if no files added, show no rows found', async ({ page, courseList }, {
    workerIndex
  }) => {
    await courseList.gotoCourseByName(
      `Advanced course in Testing -${workerIndex}-`
    )

    const examsNoRows = page
      .getByLabel('Exams')
      .getByRole('row', { name: 'No rows found.' })
    await expect(examsNoRows).toBeVisible()

    const notesNoRows = page
      .getByLabel('Lecture notes')
      .getByRole('row', { name: 'No rows found.' })
    await expect(notesNoRows).toBeVisible()

    const excercisesNoRows = page
      .getByLabel('Exercises')
      .getByRole('row', { name: 'No rows found.' })
    await expect(excercisesNoRows).toBeVisible()

    const othersNoRows = page
      .getByLabel('Others')
      .getByRole('row', { name: 'No rows found.' })
    await expect(othersNoRows).toBeVisible()
  })

  test('FileListing row is correct with correct icon', async ({
    page,
    courseList,
    fileList
  }, { workerIndex }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const documentRow = await fileList.getFileItemRowByName(
      `exam-document-${workerIndex}.txt`
    )
    const documentIcon = documentRow.locator('img').nth(0)
    const name = documentRow.getByText(`exam-document-${workerIndex}.txt`, {
      exact: true
    })
    const lastModified = documentRow.getByTestId(`upload-date-time`)
    const documentExamId = await page.getAttribute(
      `[data-file-name="exam-document-${workerIndex}.txt"]`,
      'data-file-id'
    )
    const manageButton = documentRow.getByTitle(
      `Manage "exam-document-${workerIndex}.txt"`
    )

    await expect(documentRow).toBeVisible()
    await expect(name).toBeVisible()
    await expect(lastModified).toBeVisible()
    await expect(manageButton).toBeVisible()

    await expect(documentIcon).toHaveAttribute(
      'src',
      new RegExp('icon-document')
    )
    await expect(name).toHaveAttribute(
      'href',
      `/files/${documentExamId}/exam-document-${workerIndex}.txt`
    )
    await expect(lastModified).toHaveText(
      `${new Date().toISOString().split('T')[0]}`
    )

    const pdfRow = await fileList.getFileItemRowByName(
      `exam-pdf-${workerIndex}.pdf`
    )
    const pdfIcon = pdfRow.locator('img').nth(0)

    await expect(pdfRow).toBeVisible()
    await expect(pdfIcon).toHaveAttribute('src', new RegExp('icon-pdf'))

    const imageRow = await fileList.getFileItemRowByName(
      `exam-image-${workerIndex}.png`
    )
    const imageIcon = imageRow.locator('img').nth(0)

    await expect(imageRow).toBeVisible()
    await expect(imageIcon).toHaveAttribute('src', new RegExp('icon-photo'))
  })

  test('manage file button is not shown if no rights', async ({
    kayttajaPage
  }, { workerIndex }) => {
    await kayttajaPage.goto('/')

    const courseRow = await kayttajaPage.getByRole('row', {
      name: `Introduction to testing -${workerIndex}-`
    })

    await courseRow
      .getByText(`Introduction to testing -${workerIndex}-`, { exact: true })
      .click()

    const exam = await kayttajaPage
      .getByLabel('Exams')
      .locator(`div[data-file-name="exam-pdf-${workerIndex}.pdf"]`)
    const notes = await kayttajaPage
      .getByLabel('Lecture notes')
      .locator(`div[data-file-name="notes-pdf-${workerIndex}.pdf"]`)
    const exercise = await kayttajaPage
      .getByLabel('Exercises')
      .locator(`div[data-file-name="exercise-pdf-${workerIndex}.pdf"]`)
    const other = await kayttajaPage
      .getByLabel('Others')
      .locator(`div[data-file-name="other-pdf-${workerIndex}.pdf"]`)

    const examManage = exam.getByRole('link', { name: 'manage' })
    const notesManage = notes.getByRole('link', { name: 'manage' })
    const exerciseManage = exercise.getByRole('link', { name: 'manage' })
    const otherManage = other.getByRole('link', { name: 'manage' })

    await expect(examManage).not.toBeVisible()
    await expect(notesManage).not.toBeVisible()
    await expect(exerciseManage).not.toBeVisible()
    await expect(otherManage).not.toBeVisible()
  })

  test('upload files navigation is correct', async ({ page, fileList }, {
    workerIndex
  }) => {
    await fileList.gotoUploadByName(`Introduction to testing -${workerIndex}-`)

    const courseId = (await page.getAttribute(
      `[data-course-name="Introduction to testing -${workerIndex}-"]`,
      'data-course-id'
    )) as string

    const backButton = page.getByLabel(
      `Back to course "Introduction to testing -${workerIndex}-"`
    )
    const heading = page.getByRole('heading', {
      name: `Upload files to "Introduction to testing -${workerIndex}-"`
    })

    await expect(heading).toBeVisible()
    await expect(backButton).toBeVisible()

    await backButton.click()

    await page.waitForURL(
      urlForCourse(
        parseInt(courseId),
        `Introduction to testing -${workerIndex}-`
      )
    )
  })

  test('manage file navigation is correct', async ({
    page,
    courseList,
    fileList
  }, { workerIndex }) => {
    await courseList.gotoCourseByName(
      `Introduction to testing -${workerIndex}-`
    )

    const row = await fileList.getFileItemRowByName(
      `exam-document-${workerIndex}.txt`
    )
    const examId = (await row.getAttribute('data-file-id')) as string
    await fileList.gotoFileManagement(
      parseInt(examId),
      `exam-document-${workerIndex}.txt`
    )

    const backButton = page.getByLabel(
      `Back to course "Introduction to testing -${workerIndex}-"`
    )
    const heading = page.getByRole('heading', {
      name: `Manage file "exam-document-${workerIndex}.txt"`
    })

    await expect(heading).toBeVisible()
    await expect(backButton).toBeVisible()

    await backButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*manage.*\b).*$'))

    const redirectHeading = page.getByRole('heading', {
      name: `Introduction to testing -${workerIndex}-`
    })
    await expect(redirectHeading).toBeVisible()
  })
})

// test('FileLIst screenshot testing', async ({ page }) => {
//   await page.goto('/archive/3-advanced-course-in-machine-learning')
//   await expect(page).toHaveScreenshot({
//     fullPage: true
//   })
// })

test.describe('FileListing functions right', () => {
  test.beforeEach(async ({ request, context }, { testId }) => {
    const introRes = await request.post('/api/courses/create', {
      data: { courseName: `Introduction to testing ${testId}` }
    })
    const introCourse: CourseListItem = await introRes.json()

    await request.post('/api/files/upload', {
      multipart: {
        courseId: introCourse.id,
        type: 'exam',
        pdf: {
          name: `existing-${testId}.pdf`,
          mimeType: 'application/pdf',
          buffer: Buffer.from('This is a test.')
        }
      }
    })
  })

  test.afterEach(async ({ request, context }, { testId }) => {
    const files: FileListItem[] = await (await request.get('/api/files')).json()
    await Promise.all(
      files
        .filter(file => file.fileName.includes(testId))
        .map(
          async file =>
            await request.post(`/api/files/delete`, {
              data: {
                fileId: file.id
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

  test('upload new exam file via modal works', async ({
    page,
    courseList,
    fileList
  }, { testId }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    await fileList.openUploadModal()

    const courseId = (await page.getAttribute(
      `[data-course-name="Introduction to testing ${testId}"]`,
      'data-course-id'
    )) as string

    const typeInput = page.locator("select[name='type']")
    await expect(typeInput).toBeVisible()

    await typeInput.selectOption({ label: 'Exam' })

    const fileInput = page.locator("input[name='files']")
    await expect(fileInput).toBeVisible()

    const filename = `exam-${testId}.pdf`

    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
    await fileInput.setInputFiles({
      name: filename,
      mimeType: 'application/pdf',
      buffer: Buffer.from('Test file.')
    })

    const uploadButton = page.getByRole('button', { name: 'Upload' })
    await expect(uploadButton).toBeVisible()
    await uploadButton.click()

    await test.slow() // add timeout for making sure file is uploaded

    await page.waitForURL(
      urlForCourse(parseInt(courseId), `Introduction to testing ${testId}`)
    )

    const row = await fileList.getFileItemRowByName(filename, 'exam')
    await expect(row).toBeVisible()

    const modal = page.getByTestId('modal')
    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('upload new lecture notes file via modal works', async ({
    page,
    courseList,
    fileList
  }, { testId }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    await fileList.openUploadModal()

    const courseId = (await page.getAttribute(
      `[data-course-name="Introduction to testing ${testId}"]`,
      'data-course-id'
    )) as string

    const typeInput = page.locator("select[name='type']")
    await expect(typeInput).toBeVisible()

    await typeInput.selectOption({ label: 'Lecture notes' })

    const fileInput = page.locator("input[name='files']")
    await expect(fileInput).toBeVisible()

    const filename = `notes-${testId}.pdf`

    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
    await fileInput.setInputFiles({
      name: filename,
      mimeType: 'application/pdf',
      buffer: Buffer.from('Test file.')
    })

    const uploadButton = page.getByRole('button', { name: 'Upload' })
    await expect(uploadButton).toBeVisible()
    await uploadButton.click()

    await test.slow() // add timeout for making sure file is uploaded

    await page.waitForURL(
      urlForCourse(parseInt(courseId), `Introduction to testing ${testId}`)
    )

    const row = await fileList.getFileItemRowByName(filename, 'notes')
    await expect(row).toBeVisible()

    const modal = page.getByTestId('modal')
    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('upload new exercise file via modal works', async ({
    page,
    courseList,
    fileList
  }, { testId }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    await fileList.openUploadModal()

    const courseId = (await page.getAttribute(
      `[data-course-name="Introduction to testing ${testId}"]`,
      'data-course-id'
    )) as string

    const typeInput = page.locator("select[name='type']")
    await expect(typeInput).toBeVisible()

    await typeInput.selectOption({ label: 'Exercise' })

    const fileInput = page.locator("input[name='files']")
    await expect(fileInput).toBeVisible()

    const filename = `exercise-${testId}.pdf`

    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
    await fileInput.setInputFiles({
      name: filename,
      mimeType: 'application/pdf',
      buffer: Buffer.from('Test file.')
    })

    const uploadButton = page.getByRole('button', { name: 'Upload' })
    await expect(uploadButton).toBeVisible()
    await uploadButton.click()

    await test.slow() // add timeout for making sure file is uploaded

    await page.waitForURL(
      urlForCourse(parseInt(courseId), `Introduction to testing ${testId}`)
    )

    const row = await fileList.getFileItemRowByName(filename, 'exercise')
    await expect(row).toBeVisible()

    const modal = page.getByTestId('modal')
    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('upload new other file via modal works', async ({
    page,
    courseList,
    fileList
  }, { testId }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    await fileList.openUploadModal()

    const courseId = (await page.getAttribute(
      `[data-course-name="Introduction to testing ${testId}"]`,
      'data-course-id'
    )) as string

    const typeInput = page.locator("select[name='type']")
    await expect(typeInput).toBeVisible()

    await typeInput.selectOption({ label: 'Other' })

    const fileInput = page.locator("input[name='files']")
    await expect(fileInput).toBeVisible()

    const filename = `other-${testId}.pdf`

    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
    await fileInput.setInputFiles({
      name: filename,
      mimeType: 'application/pdf',
      buffer: Buffer.from('Test file.')
    })

    const uploadButton = page.getByRole('button', { name: 'Upload' })
    await expect(uploadButton).toBeVisible()
    await uploadButton.click()

    await test.slow() // add timeout for making sure file is uploaded

    await page.waitForURL(
      urlForCourse(parseInt(courseId), `Introduction to testing ${testId}`)
    )

    const row = await fileList.getFileItemRowByName(filename, 'other')
    await expect(row).toBeVisible()

    const modal = page.getByTestId('modal')
    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('upload new file works', async ({ page, courseList, fileList }, {
    testId
  }) => {
    await fileList.gotoUploadByName(`Introduction to testing ${testId}`)

    const typeInput = page.locator("select[name='type']")
    await expect(typeInput).toBeVisible()

    await typeInput.selectOption({ label: 'Exam' })

    const fileInput = page.locator("input[type='file']")
    await expect(fileInput).toBeVisible()

    const filename = `exam-${testId}.pdf`

    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
    await fileInput.setInputFiles({
      name: filename,
      mimeType: 'application/pdf',
      buffer: Buffer.from('Test file.')
    })

    const uploadButton = page.getByRole('button', { name: 'Upload' })
    await expect(uploadButton).toBeVisible()
    await uploadButton.click()

    await test.slow() // add timeout for making sure file is uploaded

    const row = await fileList.getFileItemRowByName(filename, 'exam')
    await expect(row).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('upload multiple file works', async ({ page, courseList, fileList }, {
    testId
  }) => {
    await fileList.gotoUploadByName(`Introduction to testing ${testId}`)

    const typeInput = page.locator("select[name='type']")
    await expect(typeInput).toBeVisible()

    await typeInput.selectOption({ label: 'Exam' })

    const fileInput = page.locator("input[type='file']")
    await expect(fileInput).toBeVisible()

    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
    await fileInput.setInputFiles([
      {
        name: `exam-${testId}-1.pdf`,
        mimeType: 'application/pdf',
        buffer: Buffer.from('Test file.')
      },
      {
        name: `exam-${testId}-2.pdf`,
        mimeType: 'application/pdf',
        buffer: Buffer.from('Test file.')
      }
    ])

    const uploadButton = page.getByRole('button', { name: 'Upload' })
    await expect(uploadButton).toBeVisible()
    await uploadButton.click()

    await test.slow() // add timeout for making sure file is uploaded

    const row1 = await fileList.getFileItemRowByName(
      `exam-${testId}-1.pdf`,
      'exam'
    )
    await expect(row1).toBeVisible()

    const row2 = await fileList.getFileItemRowByName(
      `exam-${testId}-2.pdf`,
      'exam'
    )
    await expect(row2).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam ${filename} created!`)
    // await expect(success).toBeVisible()
  })

  test('rename file via modal works', async ({ page, courseList, fileList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await fileList.getFileItemRowByName(
      `existing-${testId}.pdf`,
      'exam'
    )
    await expect(row).toBeVisible()

    const manageButton = row.getByLabel(`Manage "existing-${testId}.pdf"`)
    await manageButton.click()

    const modal = page.getByTestId('modal')
    const title = modal.getByRole('heading', {
      name: `Manage file "existing-${testId}.pdf"`
    })
    const heading = modal
      .locator('h3')
      .getByText('Manage file', { exact: true })
    const renameInput = modal.locator('input[name="fileName"]')
    const saveButton = modal.getByRole('button', {
      name: `Save file "existing-${testId}.pdf"`
    })

    await expect(title).toBeVisible()
    await expect(heading).toBeVisible()
    await expect(renameInput).toBeVisible()
    await expect(saveButton).toBeVisible()

    const newFilename = `renamed-${testId}.pdf`
    await renameInput.fill(newFilename)
    await saveButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*manage.*\b).*$'))

    const newRow = await fileList.getFileItemRowByName(newFilename, 'exam')
    const name = newRow.getByText(newFilename, { exact: true })
    await expect(name).toBeVisible()

    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('change type of file via modal works', async ({
    page,
    courseList,
    fileList
  }, { testId }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await fileList.getFileItemRowByName(
      `existing-${testId}.pdf`,
      'exam'
    )
    await expect(row).toBeVisible()

    const manageButton = row.getByLabel(`Manage "existing-${testId}.pdf"`)
    await manageButton.click()

    const modal = page.getByTestId('modal')

    const typeInput = modal.locator('select[name="type"]')
    const saveButton = modal.getByRole('button', {
      name: `Save file "existing-${testId}.pdf"`
    })

    await typeInput.selectOption({ label: 'Lecture notes' })
    await saveButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*manage.*\b).*$'))

    const newRow = await fileList.getFileItemRowByName(
      `existing-${testId}.pdf`,
      'notes'
    )
    const name = newRow.getByText(`existing-${testId}.pdf`, { exact: true })
    await expect(name).toBeVisible()

    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('rename file and change of type at the same time via modal works', async ({
    page,
    courseList,
    fileList
  }, { testId }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await fileList.getFileItemRowByName(
      `existing-${testId}.pdf`,
      'exam'
    )
    await expect(row).toBeVisible()

    const manageButton = row.getByLabel(`Manage "existing-${testId}.pdf"`)
    await manageButton.click()

    const modal = page.getByTestId('modal')

    const renameInput = modal.locator('input[name="fileName"]')
    const typeInput = modal.locator('select[name="type"]')
    const saveButton = modal.getByRole('button', {
      name: `Save file "existing-${testId}.pdf"`
    })

    const newFilename = `renamed-${testId}.pdf`
    await renameInput.fill(newFilename)
    await typeInput.selectOption({ label: 'Lecture notes' })
    await saveButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*manage.*\b).*$'))

    const newRow = await fileList.getFileItemRowByName(newFilename, 'notes')
    const name = newRow.getByText(newFilename, { exact: true })
    await expect(name).toBeVisible()

    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('rename file works', async ({ page, courseList, fileList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await fileList.getFileItemRowByName(
      `existing-${testId}.pdf`,
      'exam'
    )
    await expect(row).toBeVisible()

    const fileId = (await row.getAttribute('data-file-id')) as string
    await fileList.gotoFileManagement(
      parseInt(fileId),
      `existing-${testId}.pdf`
    )

    const renameInput = page.locator('input[name="fileName"]')
    const renameButton = page.getByRole('button', {
      name: `Save file "existing-${testId}.pdf"`
    })

    const newFilename = `renamed-${testId}.pdf`
    await renameInput.fill(newFilename)
    await renameButton.click()

    const newRow = await fileList.getFileItemRowByName(newFilename, 'exam')
    const name = newRow.getByText(newFilename, { exact: true })
    await expect(name).toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been renamed from X to Y.`)
    // await expect(success).toBeVisible()
  })

  test('delete file via modal works', async ({ page, courseList, fileList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await fileList.getFileItemRowByName(`existing-${testId}.pdf`)
    await expect(row).toBeVisible()

    const manageButton = row.getByLabel(`Manage "existing-${testId}.pdf"`)
    await manageButton.click()

    const modal = page.getByTestId('modal')
    const title = modal.getByRole('heading', {
      name: `Manage file "existing-${testId}.pdf"`
    })
    const heading = modal
      .locator('h3')
      .getByText('Delete file', { exact: true })
    const deleteButton = modal.getByRole('button', {
      name: `Delete file "existing-${testId}.pdf"`
    })
    await expect(title).toBeVisible()
    await expect(heading).toBeVisible()
    await expect(deleteButton).toBeVisible()

    await deleteButton.click()

    await page.waitForURL(new RegExp('^(?!\b.*manage.*\b).*$'))

    const newRow = await fileList.getFileItemRowByName(
      `existing-${testId}.pdf`,
      'exam'
    )
    await expect(newRow).not.toBeVisible()

    await expect(modal).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been deleted.`)
    // await expect(success).toBeVisible()
  })

  test('delete file works', async ({ page, courseList, fileList }, {
    testId
  }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await fileList.getFileItemRowByName(`existing-${testId}.pdf`)
    await expect(row).toBeVisible()

    const examId = (await row.getAttribute('data-file-id')) as string
    await fileList.gotoFileManagement(
      parseInt(examId),
      `existing-${testId}.pdf`
    )

    const deleteButton = page.getByRole('button', {
      name: `Delete file "existing-${testId}.pdf"`
    })
    await deleteButton.click()

    const newRow = await fileList.getFileItemRowByName(
      `existing-${testId}.pdf`,
      'exam'
    )
    await expect(newRow).not.toBeVisible()

    // Flash messages not implemented yet
    // const success = page.getByText(`Exam has been deleted.`)
    // await expect(success).toBeVisible()
  })

  test('opening file makes popup like pdf viewer etc', async ({
    page,
    courseList,
    fileList
  }, { testId }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)

    const row = await fileList.getFileItemRowByName(`existing-${testId}.pdf`)
    const name = row.getByText(`existing-${testId}.pdf`, { exact: true })

    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      name.click()
    ])

    await expect(page1).toBeDefined()
  })
})
