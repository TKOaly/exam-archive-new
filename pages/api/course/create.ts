import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'

import { findCourseByName, createCourse } from '@services/archive'

const CreateCourseBody = z
  .object({
    courseName: z.string().min(1)
  })
  .transform(body => body.courseName)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('upload')
  if (req.method === 'POST') {
    try {
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
      if (!(error instanceof Error)) throw error
      console.log('Error creating course', error)
      return res.status(500).json({ error: '500 Internal Server Error' })
    }
  } else {
    res.status(404).send('404 Not Found')
  }
}

export default handler
