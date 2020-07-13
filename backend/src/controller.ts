import express from 'express'
import bodyParser from 'body-parser'
import slugify from 'slugify'
import {
  getCourseListing,
  getCourseInfo,
  deleteCourse,
  deleteExam,
  CourseNotFoundError,
  CannotDeleteError,
  findCourseByExamId,
  findCourseByName
} from './service/archive'
import { AuthData, requireRights } from './common'

const slugifyCourseName = (courseName: string) => {
  return slugify(courseName.replace(/c\+\+/i, 'cpp'), {
    lower: true,
    replacement: '-',
    remove: /[^\w\d \-]/g
  })
}

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.redirect('/archive')
})

const urlForCourse = (id: number, name: string) =>
  `/archive/${id}-${slugifyCourseName(name)}`

router.get('/archive', async (req, res) => {
  const list = await getCourseListing()

  const auth = (req as any).auth as AuthData
  res.render('index', {
    flash: req.flash(),
    courses: list
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(({ id, name, lastModified }) => ({
        id,
        name,
        lastModified,
        url: urlForCourse(id, name)
      })),
    userRights: auth.rights,
    username: auth.user.username
  })
})

router.post('/archive', requireRights('upload'), async (req, res) => {
  const { courseName } = req.body

  const existingCourse = await findCourseByName(courseName.trim())
  if (existingCourse) {
    req.flash(`Course ${existingCourse.name} already exists!`, 'error')
    return res.redirect('/')
  }
  res.send('asd')
})

const examDownloadUrl = (examId: number, fileName: string) =>
  `/download/${examId}/${fileName}`

router.get('/archive/:id(\\d+)-?:courseSlug?', async (req, res, next) => {
  const { id: unparsedId, courseSlug } = req.params

  const id = parseInt(unparsedId, 10)
  if (isNaN(id)) {
    return next()
  }

  const course = await getCourseInfo(id)
  if (course === null) {
    return next()
  }

  if (courseSlug !== slugifyCourseName(course.name)) {
    return res.redirect(302, urlForCourse(course.id, course.name))
  }

  const auth = (req as any).auth as AuthData

  res.render('course', {
    course,
    exams: course.exams.map(exam => ({
      ...exam,
      downloadUrl: examDownloadUrl(exam.id, exam.fileName)
    })),
    previousPageUrl: '/archive',
    userRights: auth.rights,
    username: auth.user.username
  })
})

router.post(
  '/archive/delete-exam/:examId(\\d+)',
  requireRights('remove'),
  async (req, res) => {
    try {
      const course = await findCourseByExamId(parseInt(req.params.examId, 10))

      if (!course) {
        // TODO handle
        return res.json({ error: 'todo' })
      }

      await deleteExam(parseInt(req.params.examId, 10))
      return res.redirect(urlForCourse(course.id, course.name))
    } catch (e) {
      console.error(e)
      // TODO: show flash message
      res.json({ error: e.message })
    }
  }
)

router.post(
  '/archive/delete-course/:courseId(\\d+)',
  requireRights('remove'),
  async (req, res) => {
    try {
      await deleteCourse(parseInt(req.params.courseId, 10))
      return res.redirect('/archive')
    } catch (e) {
      // TODO: show flash messages
      if (e instanceof CourseNotFoundError) {
        return res.json({ error: e.message, type: 'CorseNotFoundErr' })
      }
      if (e instanceof CannotDeleteError) {
        return res.json({ error: e.message, type: 'CAnnotDeleteDerro' })
      }
      return res.json({ error: e.message, wtf: true })
    }
  }
)

export default router