import type { NextApiRequest, NextApiResponse } from 'next'

import {
  deleteCourse,
  CourseNotFoundError,
  CannotDeleteError
} from '@services/archive'
import { urlForCourse } from '@utilities/courses'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('remove')
  if (req.method === 'POST') {
    const { courseId: unparsedCourseId } = req.query
    const test = unparsedCourseId as string
    const courseId = parseInt(test, 10)
    console.log(unparsedCourseId, test, courseId)
    try {
      const deletedCourse = await deleteCourse(courseId)
      // req.flash(`The course "${deletedCourse?.name}" has been deleted.`, 'info')
      return res.redirect('/')
    } catch (e) {
      if (e instanceof CourseNotFoundError) {
        // req.flash(e.message, 'error')
        return res.redirect('/')
      }
      if (e instanceof CannotDeleteError) {
        // req.flash(e.message, 'error')
        return res.redirect(urlForCourse(courseId, 'a'))
      }
      // req.flash('An error occurred while deleting the course.', 'error')
      res.redirect('/')
    }
  } else {
    console.log('ignoring, not post')
    res.redirect('/')
  }
}

export default handler
