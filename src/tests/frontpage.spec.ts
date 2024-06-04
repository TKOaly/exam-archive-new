import { encode } from 'next-auth/jwt'
import { test, expect } from '@playwright/test'
import config from '@lib/config'
import { UserMembership, UserRole } from '@lib/types'

test.describe('frontpage of Tärpistö works', () => {
  test.beforeEach(async ({ page, context }) => {
    const token = await encode({
      token: {
        name: 'dev',
        role: 'yllapitaja' as UserRole,
        membership: 'jasen' as UserMembership,
        rights: { access: true, upload: true, remove: true, rename: true }
      },
      secret: config.USER_SERVICE_SECRET
    })

    await context.addCookies([
      {
        name: 'next-auth.session-token',
        value: token,
        domain: '127.0.0.1',
        path: '/',
        httpOnly: true,
        sameSite: 'Lax',
        expires: -1
      }
    ])

    await page.goto('/')
  })

  test('header is right', async ({ page, context }) => {
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

    const signOutForm = menu.locator('form[name="signOut"]')
    await expect(signOutForm).toBeVisible()
    await expect(signOutForm).toHaveAttribute('action', '/auth/signout')
    const signOutButton = signOutForm.getByText('sign out')
    await expect(signOutButton).toBeVisible()
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

    const footer = page.getByText('The TKO-äly ry exam archive.')
    await expect(footer).toBeVisible()

    const contact = page.getByText('tarpisto@tko-aly.fi')
    await expect(contact).toBeVisible()
    await expect(contact).toHaveAttribute('href', 'mailto:tarpisto@tko-aly.fi')

    await expect(page.locator('a', { hasText: 'TKO-äly ry' })).toHaveAttribute(
      'href',
      'https://www.tko-aly.fi/'
    )
    await expect(page.locator('a', { hasText: 'Privacy' })).toHaveAttribute(
      'href',
      'https://www.tko-aly.fi/tietosuoja'
    )
    await expect(page.locator('a', { hasText: 'Source code' })).toHaveAttribute(
      'href',
      'https://github.com/TKOaly/exam-archive-new/'
    )
    await expect(page.locator('a', { hasText: 'Fuksiwiki' })).toHaveAttribute(
      'href',
      'https://fuksiwiki.tko-aly.fi/T%C3%A4rpist%C3%B6'
    )
  })
})
