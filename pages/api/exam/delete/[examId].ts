import type { NextApiRequest, NextApiResponse } from 'next'

import { findCourseByExamId, deleteExam } from '@services/archive'
import { urlForCourse } from '@utilities/courses'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('rename')
  if (req.method === 'POST') {
    try {
      const { examId: unparsedExamId } = req.query
      const examId = parseInt(unparsedExamId as string, 10)
      const course = await findCourseByExamId(examId)

      if (!course) {
        // req.flash(`Exam does not exist.`, 'error')
        return res.redirect('/')
      }

      await deleteExam(examId)
      // don't delete from S3, purge S3 objects with no references separately via admin panel
      // also, TODO admin panel lol!
      //   req.flash(`Exam has been deleted.`, 'info')
      return res.redirect(urlForCourse(course.id, course.name))
    } catch (e) {
      console.error(e)
      //   req.flash(
      //     `An error occurred while deleting the exam. Please try again.`,
      //     'error'
      //   )
      return res.redirect('/')
    }
  } else {
    console.log('ignoring, not post')
    res.redirect('/')
  }
}

export default handler
