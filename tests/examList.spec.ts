import { test, expect } from '@playwright/test'

test.describe.configure({ mode: 'serial' })

test('examlisting works', async ({ page }) => {
  await page.goto('/archive/3')

  const heading = page.getByRole('heading', {
    name: 'Advanced Course in Machine Learning'
  })
  await expect(heading).toBeVisible()

  await expect(page).toHaveTitle(
    'Advanced Course in Machine Learning - Tärpistö - TKO-äly ry'
  )
})

// test('examList screenshot testing', async ({ page }) => {
//   await page.goto('/archive/3')
//   await expect(page).toHaveScreenshot({
//     fullPage: true
//   })
// })

test('examlisting headers are correct', async ({ page }) => {
  await page.goto('/archive/3')

  const headers = page.getByRole('row', {
    name: 'Exam Upload date Delete Rename'
  })
  await expect(headers).toBeVisible()
})

test('back to course list button works', async ({ page }) => {
  await page.goto('/archive/132')

  const backButton = page.locator('[aria-label="Back to course listing"]')
  await expect(backButton).toBeVisible()

  await backButton.click()

  const heading = page.getByRole('heading', { name: 'Courses' })
  await expect(heading).toBeVisible()
})

test('if no exams added, show no exams found', async ({ page }) => {
  await page.goto('/archive/132')

  const notification = page.getByText(`No exams found.`)
  await expect(notification).toBeVisible()
})

test('examlisting row is correct with pdf icon', async ({ page }) => {
  await page.goto('/archive/3')

  const row = page.locator('[data-exam-id="1842"]')
  const fileIcon = row.locator('img').nth(0)
  const name = row.locator('a', {
    hasText: '170511_Advanced_Course_in_Machine_Learning_KK.pdf'
  })
  const lastModified = row.locator('time', { hasText: '2017-05-11' })
  const deleteButton = row.getByTitle(
    'Delete exam "170511_Advanced_Course_in_Machine_Learning_KK.pdf"'
  )
  const deleteIcon = deleteButton.locator('img')
  const renameButton = row
    .getByRole('cell', { name: 'rename' })
    .locator('button')

  await expect(row).toBeVisible()
  await expect(name).toBeVisible()
  await expect(lastModified).toBeVisible()
  await expect(deleteButton).toBeVisible()
  await expect(renameButton).toBeVisible()

  await expect(fileIcon).toHaveAttribute('src', '/static/img/icon-pdf.svg')
  await expect(name).toHaveAttribute(
    'href',
    '/download/1842/170511_Advanced_Course_in_Machine_Learning_KK.pdf'
  )
  await expect(deleteIcon).toHaveAttribute('src', '/static/img/delete.png')
  await expect(renameButton).toHaveAttribute(
    'data-current-name',
    '170511_Advanced_Course_in_Machine_Learning_KK.pdf'
  )
  await expect(renameButton).toHaveAttribute('data-id', '1842')
  await expect(renameButton).toHaveAttribute('data-rename-exam-button', 'true')
})

test('examlisting row shows image icon', async ({ page }) => {
  await page.goto('/archive/5')

  const row = page.locator('[data-exam-id="1631"]')
  const fileIcon = row.locator('img').nth(0)
  const name = row.locator('a', { hasText: '130227_Algebra_I_KK1.jpg' })

  await expect(row).toBeVisible()
  await expect(name).toBeVisible()

  await expect(fileIcon).toHaveAttribute('src', '/static/img/icon-photo.svg')
})

test('upload new file works', async ({ page, request }) => {
  await page.goto('/archive/3')

  const fileInput = page.locator("input[type='file']")
  await expect(fileInput).toBeVisible()

  const filename = `${Math.random()}.pdf`

  // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
  await fileInput.setInputFiles({
    name: filename,
    mimeType: 'application/pdf',
    buffer: Buffer.from('Test file.')
  })

  const uploadButton = page.getByRole('button', { name: 'Upload' })
  await expect(uploadButton).toBeVisible()
  await uploadButton.click()

  const success = page.getByText(`Exam ${filename} created!`)
  await expect(success).toBeVisible()

  // clean exam
  const examId = await page.getAttribute(
    `[data-exam-name="${filename}"]`,
    'data-exam-id'
  )
  await request.post(`/archive/delete-exam/${examId}`)
})

test('document will bring right icon', async ({ page, request }) => {
  await page.goto('/archive/3')

  const fileInput = page.locator("input[type='file']")
  const filename = `${Math.random()}.txt`

  // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
  await fileInput.setInputFiles({
    name: filename,
    mimeType: 'text/plain',
    buffer: Buffer.from('Test file.')
  })

  const uploadButton = page.getByRole('button', { name: 'Upload' })
  await uploadButton.click()

  const row = page.locator(`[data-exam-name="${filename}"]`)
  const fileIcon = row.locator('img').nth(0)

  await expect(row).toBeVisible()
  await expect(fileIcon).toHaveAttribute('src', '/static/img/icon-document.svg')

  // clean exam
  const examId = await page.getAttribute(
    `[data-exam-name="${filename}"]`,
    'data-exam-id'
  )
  await request.post(`/archive/delete-exam/${examId}`)
})

test('rename exam works', async ({ page, request }) => {
  await page.goto('/archive/3')

  const fileInput = page.locator("input[type='file']")
  const filename = `${Math.random()}.txt`

  // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
  await fileInput.setInputFiles({
    name: filename,
    mimeType: 'text/plain',
    buffer: Buffer.from('Test file.')
  })

  const uploadButton = page.getByRole('button', { name: 'Upload' })
  await uploadButton.click()

  const newFilename = `${Math.random()}-2.txt`
  page.once('dialog', async dialog => {
    expect(dialog.message()).toEqual(
      'Please enter the new filename for this exam:'
    )
    await dialog.accept(newFilename)
  })

  await page.click(`[data-current-name="${filename}"]`)

  const newRow = page.locator(`[data-exam-name="${newFilename}"]`)
  const name = newRow.locator('a', {
    hasText: newFilename
  })
  await expect(name).toBeVisible()

  // clean exam
  const examId = await page.getAttribute(
    `[data-exam-name="${newFilename}"]`,
    'data-exam-id'
  )
  await request.post(`/archive/delete-exam/${examId}`)
})

test('rename exam cancel does nothing', async ({ page, request }) => {
  await page.goto('/archive/3')

  const fileInput = page.locator("input[type='file']")
  const filename = `${Math.random()}.txt`

  // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
  await fileInput.setInputFiles({
    name: filename,
    mimeType: 'text/plain',
    buffer: Buffer.from('Test file.')
  })

  const uploadButton = page.getByRole('button', { name: 'Upload' })

  await uploadButton.click()

  page.once('dialog', async dialog => {
    expect(dialog.message()).toEqual(
      'Please enter the new filename for this exam:'
    )
    await dialog.dismiss()
  })

  await page.click(`[data-current-name="${filename}"]`)

  const newRow = page.locator(`[data-exam-name="${filename}"]`)
  const name = newRow.locator('a', {
    hasText: filename
  })
  await expect(name).toBeVisible()

  // clean exam
  const examId = await page.getAttribute(
    `[data-exam-name="${filename}"]`,
    'data-exam-id'
  )
  await request.post(`/archive/delete-exam/${examId}`)
})

test('delete exam works', async ({ page }) => {
  await page.goto('/archive/3')

  const fileInput = page.locator("input[type='file']")
  const filename = `${Math.random()}.txt`

  // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
  await fileInput.setInputFiles({
    name: filename,
    mimeType: 'text/plain',
    buffer: Buffer.from('Test file.')
  })

  const uploadButton = page.getByRole('button', { name: 'Upload' })
  await uploadButton.click()

  const row = page.locator(`[data-exam-name="${filename}"]`)
  await expect(row).toBeVisible()
  const deleteButton = row.getByTitle(`Delete exam "${filename}"`)

  page.once('dialog', async dialog => {
    expect(dialog.message()).toEqual(
      'Are you sure you want to delete this exam?'
    )
    await dialog.accept()
  })

  await deleteButton.click()

  const newRow = page.locator(`[data-exam-name="${filename}"]`)
  await expect(newRow).not.toBeVisible()

  const success = page.getByText(`Exam has been deleted.`)
  await expect(success).toBeVisible()
})

test('delete exam cancel does nothing', async ({ page, request }) => {
  await page.goto('/archive/3')

  const fileInput = page.locator("input[type='file']")
  const filename = `${Math.random()}.txt`

  // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
  await fileInput.setInputFiles({
    name: filename,
    mimeType: 'text/plain',
    buffer: Buffer.from('Test file.')
  })

  const uploadButton = page.getByRole('button', { name: 'Upload' })
  await uploadButton.click()

  const row = page.locator(`[data-exam-name="${filename}"]`)
  await expect(row).toBeVisible()
  const deleteButton = row.getByTitle(`Delete exam "${filename}"`)

  page.once('dialog', async dialog => {
    expect(dialog.message()).toEqual(
      'Are you sure you want to delete this exam?'
    )
    await dialog.dismiss()
  })

  await deleteButton.click()

  const newRow = page.locator(`[data-exam-name="${filename}"]`)
  await expect(newRow).toBeVisible()

  // clean exam
  const examId = await page.getAttribute(
    `[data-exam-name="${filename}"]`,
    'data-exam-id'
  )
  await request.post(`/archive/delete-exam/${examId}`)
})

test('controls is correct', async ({ page }) => {
  await page.goto('/archive/132')

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

  const loggedIn = box.getByText('Logged in: dev-user (Log out)')
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
  await expect(logoutLink).toHaveAttribute('href', '/logout')
})

test('rename course works', async ({ page, request }) => {
  await page.goto('/archive')

  const addBox = page.getByTestId('controls')
  const courseName = addBox.getByPlaceholder('Course name')
  const createCourse = addBox.getByText('Create course')

  const testIdentifier = `+ ${Math.random()}`

  await courseName.fill(`Introduction to naming ${testIdentifier}`)
  await createCourse.click()

  const courseRenameButton = page.getByRole('button', { name: 'rename' }).last()

  page.once('dialog', async dialog => {
    expect(dialog.message()).toEqual(
      'Please enter the new name for this course:'
    )
    await dialog.accept(`Advanced course in naming ${testIdentifier}`)
  })

  await courseRenameButton.click()

  const heading = page.getByRole('heading', {
    name: `Advanced course in naming ${testIdentifier}`
  })
  await expect(heading).toBeVisible()

  // clean created course
  const courseId = await page.getAttribute('[data-course-id]', 'data-course-id')
  await request.post(`/archive/delete-course/${courseId}`)
})

test('rename course cancel works', async ({ page, request }) => {
  await page.goto('/archive')

  const addBox = page.getByTestId('controls')
  const courseName = addBox.getByPlaceholder('Course name')
  const createCourse = addBox.getByText('Create course')

  const testIdentifier = `+ ${Math.random()}`

  await courseName.fill(`Introduction to naming ${testIdentifier}`)
  await createCourse.click()

  const courseRenameButton = page.getByRole('button', { name: 'rename' }).last()

  page.once('dialog', async dialog => {
    expect(dialog.message()).toEqual(
      'Please enter the new name for this course:'
    )
    await dialog.dismiss()
  })

  await courseRenameButton.click()

  const heading = page.getByRole('heading', {
    name: `Introduction to naming ${testIdentifier}`
  })
  await expect(heading).toBeVisible()

  // clean created course
  const courseId = await page.getAttribute('[data-course-id]', 'data-course-id')
  await request.post(`/archive/delete-course/${courseId}`)
})

test('delete course works if no exams currently', async ({ page }) => {
  await page.goto('/archive')

  const addBox = page.getByTestId('controls')
  const courseName = addBox.getByPlaceholder('Course name')
  const createCourse = addBox.getByText('Create course')

  const testIdentifier = `${Math.random()}`

  await courseName.fill(`Introduction to naming ${testIdentifier}`)
  await createCourse.click()

  const courseDeleteButton = page.getByRole('button', { name: 'delete' }).last()

  await courseDeleteButton.click()

  const success = page.getByText(
    `The course "Introduction to naming ${testIdentifier}" has been deleted.`
  )
  await expect(success).toBeVisible()
})

test('delete course throws error if exams currently', async ({
  page,
  request
}) => {
  await page.goto('/archive')

  const addBox = page.getByTestId('controls')
  const courseName = addBox.getByPlaceholder('Course name')
  const createCourse = addBox.getByText('Create course')

  const testIdentifier = `${Math.random()}`

  await courseName.fill(`Introduction to naming ${testIdentifier}`)
  await createCourse.click()

  const fileInput = page.locator("input[type='file']")
  const filename = `${Math.random()}.txt`

  // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
  await fileInput.setInputFiles({
    name: filename,
    mimeType: 'text/plain',
    buffer: Buffer.from('Test file.')
  })

  const uploadButton = page.getByRole('button', { name: 'Upload' })
  await uploadButton.click()

  const courseDeleteButton = page.getByRole('button', { name: 'delete' }).last()

  await courseDeleteButton.click()

  const error = page.getByText(`Cannot delete a course with exam documents.`)
  await expect(error).toBeVisible()

  // clean exam
  const examId = await page.getAttribute(
    `[data-exam-name="${filename}"]`,
    'data-exam-id'
  )
  await request.post(`/archive/delete-exam/${examId}`)

  // clean created course
  const courseId = await page.getAttribute('[data-course-id]', 'data-course-id')
  await request.post(`/archive/delete-course/${courseId}`)
})

test('opening exam makes popup like pdf viewer etc', async ({ page }) => {
  await page.goto('/archive/3')

  const row = page.locator('[data-exam-id="1842"]')
  const name = row.locator('a', {
    hasText: '170511_Advanced_Course_in_Machine_Learning_KK.pdf'
  })

  const [page1] = await Promise.all([page.waitForEvent('popup'), name.click()])

  await expect(page1).toBeDefined()
})
