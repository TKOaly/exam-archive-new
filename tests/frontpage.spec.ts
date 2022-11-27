import { test, expect } from '@playwright/test'

test('frontpage of Tärpistö works', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Tärpistö - TKO-äly ry/)

  const heading = page.getByRole('heading', { name: 'Tärpistö' })
  const subheading = page
    .getByRole('banner')
    .getByText('The TKO-äly ry exam archive')

  await expect(heading).toBeVisible()
  await expect(subheading).toBeVisible()
})

test('footer is working correctly', async ({ page }) => {
  await page.goto('/')

  const footer = page.getByText('Tärpistö - The TKO-äly ry exam archive.')
  const contact = page.getByText('Contact: tarpisto@tko-aly.fi')
  const links = page.getByText('TKO-äly ryPrivacySource codeFuksiwiki')
  await expect(footer).toBeVisible()
  await expect(contact).toBeVisible()
  await expect(contact.locator('a')).toHaveAttribute(
    'href',
    'mailto:tarpisto@tko-aly.fi'
  )
  await expect(links).toBeVisible()
  await expect(links.locator('a', { hasText: 'TKO-äly ry' })).toHaveAttribute(
    'href',
    'https://www.tko-aly.fi/'
  )
  await expect(links.locator('a', { hasText: 'Privacy' })).toHaveAttribute(
    'href',
    'https://www.tko-aly.fi/tietosuoja'
  )
  await expect(links.locator('a', { hasText: 'Source code' })).toHaveAttribute(
    'href',
    'https://github.com/TKOaly/exam-archive-new/'
  )
  await expect(links.locator('a', { hasText: 'Fuksiwiki' })).toHaveAttribute(
    'href',
    'https://fuksiwiki.tko-aly.fi/T%C3%A4rpist%C3%B6'
  )
})
