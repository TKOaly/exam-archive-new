export type CourseId = number

export interface Course {
  id: CourseId
  name: string
}

export interface CourseListItem extends Course {
  /**
   * Timestamp representing the date when this course's latest exam was
   * uploaded.
   */
  url: string
  lastModified: Date | null
}

export type ExamId = number

export interface ExamListItem {
  id: ExamId
  courseId: CourseId
  fileName: string
  mimeType: string
  uploadDate: Date
  downloadUrl: string
}

export interface Exam {
  id: ExamId
  courseId: CourseId
  fileName: string
  mimeType: string
  filePath: string
  uploadDate: Date
}
