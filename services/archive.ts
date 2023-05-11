import { db as knex, dbPool, DbExam } from '@utilities/db'
import {
  Course,
  CourseListItem,
  CourseInfo,
  CourseId,
  ExamId,
  Exam,
  CourseLI,
  ExamLI,
  CreateExam
} from '@utilities/types'
import {
  deserializeCourse,
  deserializeExamListItem,
  deserializeExam
} from './dbDeserializer'

const whereNotDeleted = (tableName?: string) => {
  const key = tableName ? `${tableName}.removed_at` : 'removed_at'
  return { [key]: null }
}

export class CourseNotFoundError extends Error {
  constructor(message?: string) {
    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example
    super(message) // 'Error' breaks prototype chain here
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }
}

export class CannotDeleteError extends Error {
  constructor(message?: string) {
    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example
    super(message) // 'Error' breaks prototype chain here
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }
}

/**
 * Deletes a course by ID and returns the deleted course.
 * @throws {CourseNotFoundError} if course is not found
 * @throws {CannotDeleteError} if course still has non-deleted exams
 */
export const deleteCourse = async (courseId: CourseId) => {
  const course = await knex('courses')
    .where({ id: courseId, ...whereNotDeleted() })
    .first(['*'])

  if (!course) {
    throw new CourseNotFoundError('Course not found.')
  }

  const nonDeletedExams = parseInt(
    (
      await knex('exams')
        .where({ course_id: courseId, ...whereNotDeleted() })
        .count('id as count')
    )[0].count + '',
    10
  )

  if (nonDeletedExams > 0) {
    throw new CannotDeleteError('Cannot delete a course with exam documents.')
  }

  const deletedCourse = await knex('courses')
    .update({ removed_at: knex.fn.now() })
    .where({ id: courseId, ...whereNotDeleted() })
    .returning(['courses.*'])

  return deserializeCourse(deletedCourse[0])
}

export const deleteExam = async (examId: ExamId) =>
  await knex('exams')
    .update({ removed_at: knex.fn.now() })
    .where({ id: examId, ...whereNotDeleted() })

export const renameCourse = async (
  id: CourseId,
  newName: string
): Promise<any> =>
  await dbPool.query(
    `
    UPDATE courses
    SET name = $2
    WHERE id = $1 AND removed_at IS NULL
  `,
    [id, newName]
  )

export const getCourseListing = async (): Promise<CourseListItem[]> => {
  const results = await dbPool.query(`
    SELECT
      c.id,
      c.name,
      max(e.upload_date) as last_modified
    FROM courses c
    LEFT JOIN exams e ON e.course_id = c.id AND e.removed_at IS NULL
    WHERE c.removed_at IS NULL
    GROUP BY c.id
    ORDER BY c.name ASC
  `)
  const courses = results.rows.map(course => CourseLI.parse(course))

  return courses
}

export const getCourseInfo = async (
  courseId: number
): Promise<CourseInfo | null> => {
  const courseResult = await dbPool.query(
    `
    SELECT
      c.id,
      c.name,
      max(e.upload_date) as last_modified
    FROM courses c
    LEFT JOIN exams e ON e.course_id = c.id AND e.removed_at IS NULL
    WHERE c.id = $1 AND c.removed_at IS NULL
    GROUP BY c.id
    LIMIT 1
  `,
    [courseId]
  )

  if (!courseResult) {
    return null
  }

  const examsResult = await dbPool.query(
    `
    SELECT
      e.id,
      e.course_id,
      e.file_name,
      e.mime_type,
      e.upload_date,
      e.file_path
    FROM exams e
    WHERE e.course_id = $1 AND e.removed_at IS NULL
    ORDER BY e.file_name DESC
    `,
    [courseId]
  )

  const course = CourseLI.parse(courseResult.rows[0])
  if (!course) {
    return null
  }

  const exams = examsResult.rows.map(exam => ExamLI.parse(exam))

  return {
    ...course,
    exams
  }
}

export const findCourseByName = async (
  courseName: string
): Promise<Course | null> => {
  const course = await knex('courses')
    .where({ name: courseName, ...whereNotDeleted() })
    .first(['courses.*'])

  if (!course) {
    return null
  }

  return deserializeCourse(course)
}

export const findCourseById = async (
  courseId: CourseId
): Promise<Course | null> => {
  const course = await knex('courses')
    .where({ id: courseId, ...whereNotDeleted() })
    .first(['courses.*'])

  if (!course) {
    return null
  }

  return deserializeCourse(course)
}

export const findCourseByExamId = async (
  examId: ExamId
): Promise<Course | null> => {
  const course = await knex('courses')
    .select('*')
    .where({ ...whereNotDeleted() })
    .whereIn('id', function () {
      this.select('course_id')
        .from('exams')
        .where({ id: examId, ...whereNotDeleted() })
        .first()
    })
    .first()

  if (!course) {
    return null
  }

  return deserializeCourse(course)
}

export const getExamFileNameById = async (
  examId: ExamId
): Promise<string | null> => {
  const exam = await knex('exams')
    .select('file_name')
    .where({ id: examId, ...whereNotDeleted() })
    .first()

  if (!exam) {
    return null
  }

  return exam.file_name
}

export const renameExamFile = async (
  examId: ExamId,
  newFilename: string
): Promise<Exam | null> => {
  const updatedRows = await dbPool.query(
    `
    UPDATE exams
    SET file_name = $2
    WHERE id = $1 AND removed_at IS NULL
    RETURNING id, course_id, file_name, mime_type, upload_date, file_path
  `,
    [examId, newFilename]
  )

  const updatedExam = ExamLI.parse(updatedRows.rows[0])
  return updatedExam
}

export const createCourse = async (exam: { name: string }) => {
  const created = await knex('courses').insert(exam, ['courses.*'])
  return deserializeCourse(created[0])
}

export const createExam = async (exam: CreateExam) => {
  const result = await dbPool.query(
    `
    INSERT INTO exams
      (course_id, file_name, mime_type, file_path, upload_date)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING
      id, course_id, file_name, mime_type, upload_date, file_path
  `,
    [exam.courseId, exam.fileName, exam.mimeType, exam.filePath, new Date()]
  )

  const createdExam = ExamLI.parse(result.rows[0])

  return createdExam
}

export const findExamById = async (examId: number) => {
  return (await knex('exams')
    .where({ id: examId, ...whereNotDeleted() })
    .first(['exams.*'])) as DbExam
}
