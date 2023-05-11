import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from '@lib/sessions'
import { getCourseInfo } from '@services/archive'
import { validateRights } from '@services/tkoUserService'

const GetCourseBody = z
  .object({
    courseId: z.number()
  })
  .transform(courseId => courseId.courseId)

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const isRights = validateRights(req.session.rights, 'access')
      if (!isRights) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }

      const courseId = GetCourseBody.parse(req.query)

      const course = await getCourseInfo(courseId)
      return res.status(200).json(course)
    } catch (error) {
      console.error('Error while getting course', error)
      res.status(500).json({ error: '500 Internal server error' })
    }
  } else {
    res.status(405).send({ error: 'unvalid method' })
  }
}

const handler = withSessionRoute(get)

export default handler
