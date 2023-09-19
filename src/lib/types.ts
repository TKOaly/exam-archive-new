import { z } from 'zod'
import { urlForCourse } from './courses'
import { examDownloadUrl } from './exams'
import { DefaultUser } from 'next-auth'

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

export interface TarpistoUser extends DefaultUser {
  role: UserRole,
  membership: UserMembership,
  rights: { [right in AccessRight]: boolean }
}

declare module 'next-auth' {
  interface Session {
    user?: User
  }

  interface User {
    role: UserRole,
    membership: UserMembership,
    rights: { [right in AccessRight]: boolean }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: UserRole,
    membership: UserMembership,
    rights: { [right in AccessRight]: boolean }
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
    exams: z.array(ExamLI).default([])
  })
  .transform(course => ({
    id: course.id,
    name: course.name,
    lastModified: course.last_modified,
    url: urlForCourse(course.id, course.name),
    exams: course.exams
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

export const ExamInfo = z
  .object({
    file_name: z.string(),
    course_id: z.number(),
    name: z.string()
  })
  .transform(obj => ({
    fileName: obj.file_name,
    courseId: obj.course_id,
    courseName: obj.name
  }))
export type ExamInfo = z.infer<typeof ExamInfo>

export const AdminS3Object = z
  .object({
    id: z.number(),
    file_name: z.string(),
    file_path: z.string()
  })
  .transform(obj => ({
    id: obj.id,
    fileName: obj.file_name,
    filePath: obj.file_path
  }))
export type AdminS3Object = z.infer<typeof AdminS3Object>

export const CourseName = z.string().min(1)
export type CourseName = z.infer<typeof CourseName>

export const ExamName = z.string().min(1)
export type ExamName = z.infer<typeof ExamName>
