import { Page, Locator } from '@playwright/test'
import {
  urlForCourse,
  urlForCourseListing,
  urlForFileManagement,
  urlForFileUpload
} from '../../lib/courses'

export class FileList {
  private readonly fileInput: Locator
  private readonly uploadButton: Locator

  constructor(public readonly page: Page) {
    this.fileInput = this.page.locator('input[type=file]')
    this.uploadButton = this.page.getByRole('button', { name: 'Upload' })
  }

  async goto(courseId: number, courseName: string) {
    await this.page.goto(urlForCourse(courseId, courseName))
  }

  async gotoUpload(courseId: number, courseName: string) {
    await this.page.goto(urlForFileUpload(courseId, courseName))
  }

  async gotoUploadById(courseId: number) {
    await this.page.goto(urlForCourseListing())
    const courseName = (await this.page
      .locator(`[data-course-id="${courseId}"]`)
      .getAttribute('data-course-name')) as string
    await this.page.goto(urlForFileUpload(courseId, courseName))
  }

  async gotoUploadByName(courseName: string) {
    await this.page.goto(urlForCourseListing())
    const courseId = (await this.page
      .locator(`[data-course-name="${courseName}"]`)
      .getAttribute('data-course-id')) as string
    await this.page.goto(urlForFileUpload(parseInt(courseId), courseName))
  }

  async openUploadModal() {
    const link = await this.page.getByRole('link', { name: 'upload' })
    await link.click()
    await this.page.waitForURL(new RegExp('upload'))
  }

  async gotoFileManagement(fileId: number, fileName: string) {
    await this.page.goto(urlForFileManagement(fileId, fileName))
  }

  async openFileManagementModalById(fileId: number) {
    const row = await this.getFileItemRowById(fileId)
    const link = await row.getByRole('link', { name: 'manage' })
    await link.click()
    await this.page.waitForURL(new RegExp('manage'))
  }

  async openFileManagementModalByName(fileName: string) {
    const row = await this.getFileItemRowByName(fileName)
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

  private getLabelByType = (type: string) => {
    if (type === 'exam') return 'Exams'
    if (type === 'notes') return 'Lecture notes'
    if (type === 'exercise') return 'Exercises'
    if (type === 'other') return 'Others'
    return 'Exams'
  }

  async getFileItemRowById(fileId: number, type?: string) {
    const locator = type
      ? this.page.getByLabel(this.getLabelByType(type))
      : this.page.getByLabel('Exams')
    return await locator.locator(`div[data-file-id="${fileId}"]`)
  }

  async getFileItemRowByName(fileName: string, type?: string) {
    const locator = type
      ? this.page.getByLabel(this.getLabelByType(type))
      : this.page.getByLabel('Exams')
    return await locator.locator(`div[data-file-name="${fileName}"]`)
  }

  private async getFileRenameInputById(fileId: number) {
    const examItemRow = await this.getFileItemRowById(fileId)
    return examItemRow.locator('input[name="fileName"]')
  }

  private async getFileRenameInputByName(fileName: string) {
    const examItemRow = await this.getFileItemRowByName(fileName)
    return examItemRow.locator('input[name="fileName"]')
  }

  private async getFileRenameSubmitById(fileId: number) {
    const examItemRow = await this.getFileItemRowById(fileId)
    return examItemRow.getByRole('button', {
      name: 'renameFile'
    })
  }

  private async getFileRenameSubmitByName(fileName: string) {
    const examItemRow = await this.getFileItemRowByName(fileName)
    return examItemRow.getByRole('button', {
      name: 'renameFile'
    })
  }

  private async getFileDeleteSubmitById(fileId: number) {
    const examItemRow = await this.getFileItemRowById(fileId)
    return examItemRow.getByRole('button', {
      name: 'deleteFile'
    })
  }

  private async getFileDeleteSubmitByName(fileName: string) {
    const examItemRow = await this.getFileItemRowByName(fileName)
    return examItemRow.getByRole('button', {
      name: 'deleteFile'
    })
  }

  async renameFileById(fileId: number, newName: string) {
    await (await this.getFileRenameInputById(fileId)).fill(newName)
    await (await this.getFileRenameSubmitById(fileId)).click()
  }
  async renameFileByName(fileName: string, newName: string) {
    await (await this.getFileRenameInputByName(fileName)).fill(newName)
    await (await this.getFileRenameSubmitByName(fileName)).click()
  }
  async deleteFileById(fileId: number) {
    await (await this.getFileDeleteSubmitById(fileId)).click()
  }
  async deleteFileByName(fileName: string) {
    await (await this.getFileDeleteSubmitByName(fileName)).click()
  }
}
