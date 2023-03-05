import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'

import { findCourseByExamId, deleteExam } from '@services/archive'
import { urlForCourse } from '@utilities/courses'

const DeleteExamBody = z.object({
  examId: z.number()
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('rename')
  if (req.method === 'POST') {
    try {
      const { examId } = DeleteExamBody.parse(JSON.parse(req.body))

      const course = await findCourseByExamId(examId)

      if (!course) {
        return res.status(404).json({ error: 'Exam does not exist.' })
      }

      await deleteExam(examId)
      // don't delete from S3, purge S3 objects with no references separately via admin panel
      // also, TODO admin panel lol!
      //   req.flash(`Exam has been deleted.`, 'info')
      return res.status(200).json({ ok: true })
    } catch (e) {
      console.error(e)
      //   req.flash(
      //     `An error occurred while deleting the exam. Please try again.`,
      //     'error'
      //   )
      res.status(500).json({ error: '500 Internal Server Error' })
    }
  } else {
    res.status(404).send('404 Not Found')
  }
}

export default handler
