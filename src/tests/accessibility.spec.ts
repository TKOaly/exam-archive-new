import { expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'
import { test } from './fixtures'
import { CourseListItem, ExamListItem } from '../lib/types'

test.describe('accessibility tests', () => {
  test.beforeEach(async ({ request }, { testId }) => {
    const introRes = await request.post('/api/courses/create', {
      data: { courseName: `Introduction to testing ${testId}` }
    })
    const introCourse: CourseListItem = await introRes.json()

    await request.post('/api/exams/upload', {
      multipart: {
        courseId: introCourse.id,
        pdf: {
          name: `existing-${testId}.pdf`,
          mimeType: 'application/pdf',
          buffer: Buffer.from('This is a test.')
        }
      }
    })

    const advancedRes = await request.post('/api/courses/create', {
      data: { courseName: `Advanced course in Testing ${testId}` }
    })
  })

  test.afterEach(async ({ request }, { testId }) => {
    const exams: ExamListItem[] = await (await request.get('/api/exams')).json()
    await Promise.all(
      exams
        .filter(exam => exam.fileName.includes(testId))
        .map(
          async exam =>
            await request.post(`/api/exams/delete`, {
              data: {
                examId: exam.id
              }
            })
        )
    )

    const courses: CourseListItem[] = await (
      await request.get('/api/courses')
    ).json()
    await Promise.all(
      courses
        .filter(course => course.name.includes(testId))
        .map(
          async course =>
            await request.post(`/api/courses/delete`, {
              data: { courseId: course.id }
            })
        )
    )
  })

  test('courselist', async ({
    page,
    browserName,
    isMobile,
    courseList,
    examList
  }, { title, testId }) => {
    await courseList.goto()
    await page
      .locator(`[data-course-name="Introduction to testing ${testId}"]`)
      .waitFor()

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('create course', async ({ page, browserName, isMobile, courseList }, {
    title,
    testId
  }) => {
    await courseList.gotoCourseCreation()

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('manage course', async ({ page, browserName, isMobile, courseList }, {
    title,
    testId
  }) => {
    await courseList.gotoCourseManagementByName(
      `Introduction to testing ${testId}`
    )

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('create course modal', async ({
    page,
    browserName,
    isMobile,
    courseList
  }, { title }) => {
    await courseList.gotoCourseCreationModal()

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('manage course modal', async ({
    page,
    browserName,
    isMobile,
    courseList
  }, { title, testId }) => {
    await courseList.gotoCourseManagementModalByName(
      `Introduction to testing ${testId}`
    )

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('examlist with exams', async ({
    page,
    browserName,
    isMobile,
    courseList
  }, { testId, title }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    await page
      .locator(`[data-course-name="Introduction to testing ${testId}"]`)
      .waitFor()

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('empty examlist', async ({ page, browserName, isMobile, courseList }, {
    title,
    testId
  }) => {
    await courseList.gotoCourseByName(`Advanced course in Testing ${testId}`)
    await page
      .locator(`[data-course-name="Advanced course in Testing ${testId}"]`)
      .waitFor()

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('upload exam', async ({
    page,
    browserName,
    isMobile,
    courseList,
    examList
  }, { testId, title }) => {
    await courseList.goto()
    const row = await courseList.getCourseItemRowByName(
      `Introduction to testing ${testId}`
    )
    const courseId = (await row.getAttribute('data-course-id')) as string
    await examList.gotoUpload(
      parseInt(courseId),
      `Introduction to testing ${testId}`
    )

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('manage exam', async ({
    page,
    browserName,
    isMobile,
    courseList,
    examList
  }, { testId, title }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    const row = await examList.getExamItemRowByName(`existing-${testId}.pdf`)
    const examId = (await row.getAttribute('data-exam-id')) as string
    await examList.gotoExamManagement(
      parseInt(examId),
      `existing-${testId}.pdf`
    )

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('upload exam modal', async ({
    page,
    browserName,
    isMobile,
    courseList,
    examList
  }, { testId, title }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    await examList.openUploadModal()

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('manage exam modal', async ({
    page,
    browserName,
    isMobile,
    courseList,
    examList
  }, { testId, title }) => {
    await courseList.gotoCourseByName(`Introduction to testing ${testId}`)
    await examList.openExamManagementModalByName(`existing-${testId}.pdf`)

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('not found', async ({ page, browserName, isMobile }, { title }) => {
    await page.goto('/exams/999-no-existing-course')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('next-route-announcer')
      .disableRules(['document-title']) // Next.js does not inject currently any metadata into not-found.ts
      .analyze()
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: 'test-results/axe-reports',
        reportFileName: `${title}-${browserName}${
          isMobile ? '-mobile' : ''
        }.html`
      }
    })
    expect(accessibilityScanResults.violations).toEqual([])
  })
})
