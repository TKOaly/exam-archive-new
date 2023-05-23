import { Page, Locator } from '@playwright/test'
import { urlForCourse } from '../../lib/courses'

export class ExamList {
  private readonly fileInput: Locator
  private readonly uploadButton: Locator

  private readonly renameCourseInput: Locator
  private readonly renameCourseSubmit: Locator

  private readonly deleteCourseButton: Locator

  constructor(public readonly page: Page) {
    this.fileInput = this.page
      .getByTestId('controls')
      .locator('input[type=file]')
    this.uploadButton = this.page
      .getByTestId('controls')
      .getByRole('button', { name: 'Upload' })

    this.renameCourseInput = this.page.locator('input[name="courseName"]')
    this.renameCourseSubmit = this.page.getByRole('button', {
      name: 'renameCourse'
    })

    this.deleteCourseButton = this.page.getByRole('button', {
      name: 'deleteCourse'
    })
  }

  async goto(courseId: number, courseName: string) {
    await this.page.goto(urlForCourse(courseId, courseName))
  }

  async uploadFile(fileName: string) {
    // this will be application/octet-stream because of buffer even if it says application/pdf in mimetype...
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

  async renameCourse(newName: string) {
    await this.renameCourseInput.fill(newName)
    await this.renameCourseSubmit.click()
  }

  async deleteCourse() {
    await this.deleteCourseButton.click()
  }
}
