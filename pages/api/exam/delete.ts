import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'

import { findCourseByExamId, deleteExam } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { withSessionRoute } from '@lib/sessions'

const DeleteExamBody = z.object({
  examId: z.number()
})

const del = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const isRights = validateRights(req.session.rights, 'remove')
      if (!isRights) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }

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
    res.status(405).send({ error: 'unvalid method' })
  }
}

const handler = withSessionRoute(del)

export default handler
