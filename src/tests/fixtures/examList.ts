import { Page, Locator } from '@playwright/test'
import { urlForCourse, urlForCourseListing, urlForExamManagement, urlForExamUpload } from '../../lib/courses'

export class ExamList {
  private readonly fileInput: Locator
  private readonly uploadButton: Locator

  constructor(public readonly page: Page) {
    this.fileInput = this.page
      .locator('input[type=file]')
    this.uploadButton = this.page
      .getByRole('button', { name: 'Upload' })
  }

  async goto(courseId: number, courseName: string) {
    await this.page.goto(urlForCourse(courseId, courseName))
  }

  async gotoUpload(courseId: number, courseName: string) {
    await this.page.goto(urlForExamUpload(courseId, courseName))
  }

  async gotoUploadById(courseId: number) {
    await this.page.goto(urlForCourseListing())
    const courseName = await this.page.locator(`[data-course-id="${courseId}"]`).getAttribute('data-course-name') as string
    await this.page.goto(urlForExamUpload(courseId, courseName))
  }

  async gotoUploadByName(courseName: string) {
    await this.page.goto(urlForCourseListing())
    const courseId = await this.page.locator(`[data-course-name="${courseName}"]`).getAttribute('data-course-id') as string
    await this.page.goto(urlForExamUpload(parseInt(courseId), courseName))
  }

  async openUploadModal() {
    const link = await this.page.getByRole('link', { name: 'upload' })
    await link.click()
    await this.page.waitForURL(new RegExp('upload'))
  }

  async gotoExamManagement(examId: number, fileName: string) {
    await this.page.goto(urlForExamManagement(examId, fileName))
  }

  async openExamManagementModalById(examId: number) {
    const row = await this.getExamItemRowById(examId)
    const link = await row.getByRole('link', { name: 'manage' })
    await link.click()
    await this.page.waitForURL(new RegExp('manage'))
  }

  async openExamManagementModalByName(fileName: string) {
    const row = await this.getExamItemRowByName(fileName)
    const link = await row.getByRole('link', { name: 'manage' })
    await link.click()
    await this.page.waitForURL(new RegExp('manage'))
  }

  async uploadFile(fileName: string) {
    await this.fileInput.setInputFiles({
      name: fileName,
      mimeType: 'text/plain',
      buffer: Buffer.from('Test file.')
    })
    await this.uploadButton.click()
  }

  async getExamItemRowById(examId: number) {
    return await this.page.locator(`div[data-exam-id="${examId}"]`)
  }

  async getExamItemRowByName(examName: string) {
    return await this.page.locator(`div[data-exam-name="${examName}"]`)
  }

  private async getExamRenameInputById(examId: number) {
    const examItemRow = await this.getExamItemRowById(examId)
    return examItemRow.locator('input[name="examName"]')
  }

  private async getExamRenameInputByName(examName: string) {
    const examItemRow = await this.getExamItemRowByName(examName)
    return examItemRow.locator('input[name="examName"]')
  }

  private async getExamRenameSubmitById(examId: number) {
    const examItemRow = await this.getExamItemRowById(examId)
    return examItemRow.getByRole('button', {
      name: 'renameExam'
    })
  }

  private async getExamRenameSubmitByName(examName: string) {
    const examItemRow = await this.getExamItemRowByName(examName)
    return examItemRow.getByRole('button', {
      name: 'renameExam'
    })
  }

  private async getExamDeleteSubmitById(examId: number) {
    const examItemRow = await this.getExamItemRowById(examId)
    return examItemRow.getByRole('button', {
      name: 'deleteExam'
    })
  }

  private async getExamDeleteSubmitByName(examName: string) {
    const examItemRow = await this.getExamItemRowByName(examName)
    return examItemRow.getByRole('button', {
      name: 'deleteExam'
    })
  }

  async renameExamById(examId: number, newName: string) {
    await (await this.getExamRenameInputById(examId)).fill(newName)
    await (await this.getExamRenameSubmitById(examId)).click()
  }
  async renameExamByName(examName: string, newName: string) {
    await (await this.getExamRenameInputByName(examName)).fill(newName)
    await (await this.getExamRenameSubmitByName(examName)).click()
  }
  async deleteExamById(examId: number) {
    await (await this.getExamDeleteSubmitById(examId)).click()
  }
  async deleteExamByName(examName: string) {
    await (await this.getExamDeleteSubmitByName(examName)).click()
  }
}
