import { Page, Locator } from '@playwright/test'
import { urlForCourseListing, slugifyCourseName, urlForCourseCreation, urlForCourseManagement } from '../../lib/courses'

export class CourseList {
  private readonly createInput: Locator
  private readonly createSubmit: Locator

  constructor(public readonly page: Page) {
    this.createInput = this.page
      .getByPlaceholder('Course name')
    this.createSubmit = this.page
      .getByText('Create course')
  }

  async getCourseItemRowById(courseId: number) {
    return await this.page.locator(`div[data-course-id="${courseId}"]`)
  }

  async getCourseItemRowByName(courseName: string) {
    return await this.page.locator(`div[data-course-name="${courseName}"]`)
  }

  async goto() {
    await this.page.goto(urlForCourseListing())
  }

  async gotoCourseCreation() {
    await this.page.goto(urlForCourseCreation())
  }

  async gotoCourseCreationModal() {
    await this.goto()
    const link = await this.page.getByRole('link', { name: `create` })
    await link.click()
    await this.page.waitForURL(new RegExp('create'))
  }

  async gotoCourseById(courseId: number) {
    await this.goto()
    const row = await this.getCourseItemRowById(courseId)
    const courseName = await row.getAttribute('data-course-name') as string
    const link = await row.getByRole('link', { name: courseName, exact: true })
    await link.click()
    await this.page.waitForURL(new RegExp(`${courseId}`))
  }

  async gotoCourseByName(courseName: string) {
    await this.goto()
    const row = await this.getCourseItemRowByName(courseName)
    const link = await row.getByRole('link', { name: courseName, exact: true })
    await link.click()
    const slug = slugifyCourseName(courseName)
    await this.page.waitForURL(new RegExp(slug))
  }

  async gotoCourseManagementById(courseId: number) {
    await this.goto()
    const row = await this.getCourseItemRowById(courseId)
    const courseName = await row.getAttribute('data-course-name') as string
    await this.page.goto(urlForCourseManagement(courseId, courseName))
    await this.page.waitForURL(new RegExp(`${courseId}`))
  }

  async gotoCourseManagementByName(courseName: string) {
    await this.goto()
    const row = await this.getCourseItemRowByName(courseName)
    const courseId = await row.getAttribute('data-course-id') as string
    await this.page.goto(urlForCourseManagement(parseInt(courseId), courseName))
    const slug = slugifyCourseName(courseName)
    await this.page.waitForURL(new RegExp(slug))
  }

  async gotoCourseManagementModalById(courseId: number) {
    await this.goto()
    const row = await this.getCourseItemRowById(courseId)
    const link = await row.getByRole('link', { name: `Manage course` })
    await link.click()
    await this.page.waitForURL(new RegExp(`${courseId}`))
  }

  async gotoCourseManagementModalByName(courseName: string) {
    await this.goto()
    const row = await this.getCourseItemRowByName(courseName)
    const link = await row.getByRole('link', { name: `Manage course` })
    await link.click()
    const slug = slugifyCourseName(courseName)
    await this.page.waitForURL(new RegExp(slug))
  }


  async createCourse(name: string) {
    await this.gotoCourseCreation()
    await this.createInput.fill(name)
    await this.createSubmit.click()
    const slug = slugifyCourseName(name)
    await this.page.waitForURL(new RegExp(slug))
  }
}
