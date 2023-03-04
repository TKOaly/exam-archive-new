import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'

import {
  deleteCourse,
  CourseNotFoundError,
  CannotDeleteError
} from '@services/archive'

const DeleteCourseBody = z.object({
  courseId: z.number()
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('remove')
  if (req.method === 'POST') {
    try {
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
    res.status(404).send('404 Not Found')
  }
}

export default handler
