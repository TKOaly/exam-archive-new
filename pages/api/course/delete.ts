import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'

import {
  deleteCourse,
  CourseNotFoundError,
  CannotDeleteError
} from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { withSessionRoute } from '@lib/sessions'

const DeleteCourseBody = z.object({
  courseId: z.number()
})

const del = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const isRights = validateRights(req.session.rights, 'remove')
      if (!isRights) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }

      const { courseId } = DeleteCourseBody.parse(JSON.parse(req.body))

      const deletedCourse = await deleteCourse(courseId)
      // req.flash(`The course "${deletedCourse?.name}" has been deleted.`, 'info')
      return res.json({ ok: true })
    } catch (error) {
      console.error('Error deleting course', error)
      if (error instanceof CourseNotFoundError) {
        return res.status(404).json({ error: error.message })
      }
      if (error instanceof CannotDeleteError) {
        // req.flash(e.message, 'error')
        return res.status(400).json({ error: error.message })
      }
      // req.flash('An error occurred while deleting the course.', 'error')
      res.status(500).json({ error: '500 Internal Server Error' })
    }
  } else {
    res.status(405).send({ error: 'unvalid method' })
  }
}

const handler = withSessionRoute(del)

export default handler
