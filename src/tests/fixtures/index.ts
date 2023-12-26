import { test as base, Page } from '@playwright/test'
import { CourseList } from './courseList'
import { FileList } from './fileList'
import { getToken, setAuthentication } from '../utils'
import { UserMembership, UserRole } from '@lib/types'

type Fixtures = {
  courseList: CourseList
  fileList: FileList
  noActiveMembershipPage: Page
  noRightsPage: Page
  kayttajaPage: Page
  tenttiarkistovirkailijaPage: Page
  jasenvirkailijaPage: Page
  virkailijaPage: Page
  yllapitajaPage: Page
}

export const test = base.extend<Fixtures>({
  courseList: async ({ page }, use) => {
    const courseList = new CourseList(page)
    await use(courseList)
  },
  fileList: async ({ page }, use) => {
    const fileList = new FileList(page)
    await use(fileList)
  },
  storageState: async ({}, use) => {
    const token = await getToken()
    const cookie = {
      name: 'next-auth.session-token',
      value: token,
      domain: '127.0.0.1',
      path: '/',
      httpOnly: true,
      sameSite: 'Lax' as any,
      expires: -1,
      secure: false
    }
    await use({ cookies: [cookie] } as any)
  },
  noActiveMembershipPage: async ({ page, context }, use) => {
    await setAuthentication(context, UserRole.Kayttaja, UserMembership.EiJasen)
    await use(page)
  },
  noRightsPage: async ({ page, context }, use) => {
    await setAuthentication(context, UserRole.Kayttaja, UserMembership.Jasen, {
      access: false,
      upload: false,
      remove: false,
      rename: false
    })
    await use(page)
  },
  kayttajaPage: async ({ page, context }, use) => {
    await setAuthentication(context, UserRole.Kayttaja)
    await use(page)
  },
  tenttiarkistovirkailijaPage: async ({ page, context }, use) => {
    await setAuthentication(context, UserRole.Tenttiarkistovirkailija)
    await use(page)
  },
  jasenvirkailijaPage: async ({ page, context }, use) => {
    await setAuthentication(context, UserRole.Jasenvirkailija)
    await use(page)
  },
  virkailijaPage: async ({ page, context }, use) => {
    await setAuthentication(context, UserRole.Virkailija)
    await use(page)
  },
  yllapitajaPage: async ({ page, context }, use) => {
    await setAuthentication(context, UserRole.Yllapitaja)
    await use(page)
  }
})
