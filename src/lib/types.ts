import { z } from 'zod'
import { urlForCourse } from './courses'
import { fileDownloadUrl } from './files'
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
  exams: FileListItem[]
  notes: FileListItem[]
  exercises: FileListItem[]
  others: FileListItem[]
}

export type FileId = number

export interface FileListItem {
  id: FileId
  type: string
  courseId: CourseId
  fileName: string
  mimeType: string
  uploadDate: Date
  downloadUrl: string
}

export interface File {
  id: FileId
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

export type UserRights = { [right in AccessRight]: boolean }

export interface TarpistoUser extends DefaultUser {
  role: UserRole
  membership: UserMembership
  rights: { [right in AccessRight]: boolean }
}

declare module 'next-auth' {
  interface Session {
    user?: User
  }

  interface User {
    role: UserRole
    membership: UserMembership
    rights: { [right in AccessRight]: boolean }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: UserRole
    membership: UserMembership
    rights: { [right in AccessRight]: boolean }
  }
}

export const FileLI = z
  .object({
    id: z.number(),
    type: z.string(),
    course_id: z.number(),
    file_name: z.string(),
    mime_type: z.string(),
    upload_date: z.date(),
    file_path: z.string().uuid()
  })
  .transform(file => ({
    id: file.id,
    type: file.type,
    courseId: file.course_id,
    fileName: file.file_name,
    mimeType: file.mime_type,
    uploadDate: file.upload_date,
    filePath: file.file_path,
    downloadUrl: fileDownloadUrl(file.id, file.file_name)
  }))
export type FileLI = z.infer<typeof FileLI>

export const CourseLI = z
  .object({
    id: z.number(),
    name: z.string(),
    last_modified: z.date().nullable(),
    exams: z.array(FileLI).default([])
  })
  .transform(course => ({
    id: course.id,
    name: course.name,
    lastModified: course.last_modified,
    url: urlForCourse(course.id, course.name),
    exams: course.exams
  }))
export type CourseLI = z.infer<typeof CourseLI>

export const CreateFile = z.object({
  type: z.string().regex(/exam|notes|exercise|other/),
  courseId: z.number(),
  fileName: z.string(),
  mimeType: z.string(),
  filePath: z.string()
})
export type CreateFile = z.infer<typeof CreateFile>

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

export const FileInfo = z
  .object({
    file_name: z.string(),
    type: z.string(),
    course_id: z.number(),
    name: z.string()
  })
  .transform(obj => ({
    fileName: obj.file_name,
    type: obj.type,
    courseId: obj.course_id,
    courseName: obj.name
  }))
export type FileInfo = z.infer<typeof FileInfo>

export const AdminS3Object = z
  .object({
    id: z.number(),
    mime_type: z.string(),
    file_name: z.string(),
    file_path: z.string()
  })
  .transform(obj => ({
    id: obj.id,
    mimeType: obj.mime_type,
    fileName: obj.file_name,
    filePath: obj.file_path
  }))
export type AdminS3Object = z.infer<typeof AdminS3Object>

export const CourseName = z.string().min(1)
export type CourseName = z.infer<typeof CourseName>

export const UpdateFileInfo = z
  .object({
    fileId: z.string().regex(/^\d+$/),
    fileName: z.string().min(1),
    type: z.string().regex(/exam|notes|exercise|other/)
  })
  .transform(obj => ({
    fileId: parseInt(obj.fileId, 10),
    fileName: obj.fileName,
    type: obj.type
  }))
export type UpdateFileInfo = z.infer<typeof UpdateFileInfo>
