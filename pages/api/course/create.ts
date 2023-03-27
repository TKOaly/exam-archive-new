import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'

import { findCourseByName, createCourse } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { withSessionRoute } from '@utilities/sessions'

const CreateCourseBody = z
  .object({
    courseName: z.string().min(1)
  })
  .transform(body => body.courseName)

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const isRights = validateRights(req.session.rights, 'upload')
      if (!isRights) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }

      const courseName = CreateCourseBody.parse(JSON.parse(req.body))

      const existingCourse = await findCourseByName(courseName.trim())

      if (existingCourse) {
        // req.flash(`Course ${existingCourse.name} already exists!`, 'error')
        return res
          .status(400)
          .json({ error: `Course ${existingCourse.name} already exists!` })
      }

      const createdCourse = await createCourse({ name: courseName })

      // req.flash(`Course "${createdCourse?.name ?? courseName}" created!`, 'info')
      res.json(createdCourse)
    } catch (error) {
      console.log('Error creating course', error)
      return res.status(500).json({ error: '500 Internal Server Error' })
    }
  } else {
    res.status(405).send({ error: 'unvalid method' })
  }
}

const handler = withSessionRoute(create)

export default handler
