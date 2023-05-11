import { z } from 'zod'
import { urlForCourse } from './courses'
import { examDownloadUrl } from './exams'

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

export interface CourseInfo extends Course {
  exams: ExamListItem[]
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

export type AccessRight = 'access' | 'upload' | 'remove' | 'rename'

export enum UserRole {
  Kayttaja = 'kayttaja',
  Virkailija = 'virkailija',
  Tenttiarkistovirkailija = 'tenttiarkistovirkailija',
  Jasenvirkailija = 'jasenvirkailija',
  Yllapitaja = 'yllapitaja'
}

export enum UserMembership {
  EiJasen = 'ei-jasen',
  Erotettu = 'erotettu',
  Ulkojasen = 'ulkojasen',
  Jasen = 'jasen',
  Kannatusjasen = 'kannatusjasen',
  Kunniajasen = 'kunniajasen'
}

export interface UserServiceUser {
  username: string
  role: UserRole
  membership: UserMembership
}

export interface AuthData {
  user: UserServiceUser
  rights: { [right in AccessRight]: boolean }
}

declare module 'iron-session' {
  interface IronSessionData {
    user: UserServiceUser
    rights: { [right in AccessRight]: boolean }
    token: string
    timestamp: number
  }
}

export const ExamLI = z
  .object({
    id: z.number(),
    course_id: z.number(),
    file_name: z.string(),
    mime_type: z.string(),
    upload_date: z.date(),
    file_path: z.string().uuid()
  })
  .transform(exam => ({
    id: exam.id,
    courseId: exam.course_id,
    fileName: exam.file_name,
    mimeType: exam.mime_type,
    uploadDate: exam.upload_date,
    filePath: exam.file_path,
    downloadUrl: examDownloadUrl(exam.id, exam.file_name)
  }))
export type ExamLI = z.infer<typeof ExamLI>

export const CourseLI = z
  .object({
    id: z.number(),
    name: z.string(),
    last_modified: z.date().nullable(),
    exams: z.array(ExamLI).optional()
  })
  .transform(course => ({
    id: course.id,
    name: course.name,
    lastModified: course.last_modified,
    url: urlForCourse(course.id, course.name)
  }))
export type CourseLI = z.infer<typeof CourseLI>

export const CreateExam = z.object({
  courseId: z.number(),
  fileName: z.string(),
  mimeType: z.string(),
  filePath: z.string()
})
export type CreateExam = z.infer<typeof CreateExam>

export const CreateCourse = z.object({
  name: z.string()
})
export type CreateCourse = z.infer<typeof CreateCourse>

export const Count = z
  .object({
    count: z.number()
  })
  .transform(count => count.count)
export type Count = z.infer<typeof Count>
