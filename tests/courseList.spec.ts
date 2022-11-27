import { test, expect } from '@playwright/test'

test.describe.configure({ mode: 'serial' })

test('courselisting works', async ({ page }) => {
  await page.goto('/archive')

  const heading = page.getByRole('heading', { name: 'Courses' })
  await expect(heading).toBeVisible()
})

test('courselisting headers are correct', async ({ page }) => {
  await page.goto('/archive')

  const headers = page.getByRole('row', { name: 'Course Last modified' })
  await expect(headers).toBeVisible()
})

test('courselisting row is correct', async ({ page }) => {
  await page.goto('/archive')

  const row = page.locator('[data-course-id="2"]')
  const icon = row.locator('img')
  const name = row.locator('a', { hasText: 'Ääreisulotteinen lineaarialgebra' })
  const lastModified = row.locator('time', { hasText: '2018-04-23' })

  await expect(row).toBeVisible()
  await expect(name).toBeVisible()
  await expect(lastModified).toBeVisible()

  await expect(icon).toHaveAttribute('src', '/static/img/icon-folder.svg')
  await expect(name).toHaveAttribute(
    'href',
    '/archive/2-aareisulotteinen-lineaarialgebra'
  )
})

test('courselisting row hides last modified if no exams', async ({ page }) => {
  await page.goto('/archive')

  const row = page.locator('[data-course-id="132"]')
  const lastModified = row.locator('.course-list-item__last-modified')
  await expect(row).toBeVisible()
  await expect(row).toHaveText('Probability theory')
  await expect(lastModified).toBeEmpty()
})

test('add a new course works', async ({ page, request }) => {
  await page.goto('/archive')

  const addBox = page.getByText(
    'Add a new course:Create courseLogged in: dev-user (Log out)'
  )
  const heading = addBox.getByRole('heading', {
    name: 'Add a new course:'
  })
  const courseName = addBox.getByPlaceholder('Course name')
  const createCourse = addBox.getByText('Create course')

  await expect(addBox).toBeVisible()
  await expect(heading).toBeVisible()
  await expect(courseName).toBeVisible()
  await expect(createCourse).toBeVisible()

  const testIdentifier = `+ ${new Date().toISOString()}`

  await courseName.fill(`Introduction to testing ${testIdentifier}`)
  await createCourse.click()

  await expect(page).toHaveTitle(
    `Introduction to testing ${testIdentifier} - Tärpistö - TKO-äly ry`
  )

  const success = page.getByText(
    `Course "Introduction to testing ${testIdentifier}" created!`
  )
  await expect(success).toBeVisible()

  // clean created course
  const courseId = await page.getAttribute('[data-course-id]', 'data-course-id')
  await request.post(`/archive/delete-course/${courseId}`)
})

test('add a new course shows correct user logged in', async ({ page }) => {
  await page.goto('/archive')

  const addBox = page.getByText(
    'Add a new course:Create courseLogged in: dev-user (Log out)'
  )
  const loggedIn = addBox.getByText('Logged in: dev-user (Log out)')

  await expect(addBox).toBeVisible()
  await expect(loggedIn).toBeVisible()
})
