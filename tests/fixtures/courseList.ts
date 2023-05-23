import { Page, Locator } from '@playwright/test'
import { urlForCourseListing } from '../../lib/courses'

export class CourseList {
  private readonly createInput: Locator
  private readonly createSubmit: Locator

  constructor(public readonly page: Page) {
    this.createInput = this.page
      .getByTestId('controls')
      .getByPlaceholder('Course name')
    this.createSubmit = this.page
      .getByTestId('controls')
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

  async gotoCourseById(courseId: number) {
    const row = await this.getCourseItemRowById(courseId)
    const link = await row.locator('a')
    await link.click()
  }

  async gotoCourseByName(courseName: string) {
    const row = await this.getCourseItemRowByName(courseName)
    const link = await row.locator('a')
    await link.click()
  }

  async createCourse(name: string) {
    await this.createInput.fill(name)
    await this.createSubmit.click()
  }
}
