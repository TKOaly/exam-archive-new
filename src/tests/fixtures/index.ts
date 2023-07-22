import { test as base } from '@playwright/test'
import { CourseList } from './courseList'
import { ExamList } from './examList'

type Fixtures = {
  courseList: CourseList
  examList: ExamList
}

export const test = base.extend<Fixtures>({
  courseList: async ({ page }, use) => {
    const courseList = new CourseList(page)
    await use(courseList)
  },
  examList: async ({ page }, use) => {
    const examList = new ExamList(page)
    await use(examList)
  }
})
