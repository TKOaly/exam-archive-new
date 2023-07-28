import { test, expect } from '@playwright/test'

test.describe('frontpage of Tärpistö works', () => {
  test('header is right', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Tärpistö - TKO-äly ry/)

    const logo = page.getByRole('img', { name: 'TKO-äly logo' })
    const heading = page.getByRole('heading', { name: 'Tärpistö' })
    const menu = page.getByRole('button', { name: 'Open menu' })

    await expect(logo).toBeVisible()
    await expect(heading).toBeVisible()
    await expect(menu).toBeVisible()
  })

  test('menu is right', async ({ page }) => {
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: 'Open menu' })

    await expect(menuButton).toBeVisible()
    await menuButton.click()

    const menu = page.getByTestId('menu')
    await expect(menu).toBeVisible()

    const user = menu.getByTestId('current-user')
    await expect(user).toBeVisible()

    const userIcon = user.locator('svg')
    const userInfo = user.getByText('Logged in:')
    const userName = user.getByText('dev')

    await expect(userIcon).toBeVisible()
    await expect(userInfo).toBeVisible()
    await expect(userName).toBeVisible()

    const signOutButton = menu.getByRole('link', { name: 'sign out' })
    await expect(signOutButton).toBeVisible()
    await expect(signOutButton).toHaveAttribute('href', '/auth/signout')
  })

  test('modal can be closed', async ({ page }) => {
    await page.goto('/')
    const createButton = page.getByRole('link', { name: 'create' })
    await createButton.click()

    const modal = page.getByTestId('modal')
    await expect(modal).toBeVisible()

    const closeButton = modal.getByRole('button', { name: 'Close' })
    await expect(closeButton).toBeVisible()
    await closeButton.click()

    await expect(modal).not.toBeVisible()
  })

  test('footer is right', async ({ page }) => {
    await page.goto('/')

    const footer = page.getByText('Tärpistö - The TKO-äly ry exam archive.')
    await expect(footer).toBeVisible()

    const contact = page.getByText('tarpisto@tko-aly.fi')
    await expect(contact).toBeVisible()
    await expect(contact).toHaveAttribute('href', 'mailto:tarpisto@tko-aly.fi')

    const links = page.getByTestId('footer-links')
    await expect(links).toBeVisible()
    await expect(links.locator('a', { hasText: 'TKO-äly ry' })).toHaveAttribute(
      'href',
      'https://www.tko-aly.fi/'
    )
    await expect(links.locator('a', { hasText: 'Privacy' })).toHaveAttribute(
      'href',
      'https://www.tko-aly.fi/tietosuoja'
    )
    await expect(
      links.locator('a', { hasText: 'Source code' })
    ).toHaveAttribute('href', 'https://github.com/TKOaly/exam-archive-new/')
    await expect(links.locator('a', { hasText: 'Fuksiwiki' })).toHaveAttribute(
      'href',
      'https://fuksiwiki.tko-aly.fi/T%C3%A4rpist%C3%B6'
    )
  })
})
