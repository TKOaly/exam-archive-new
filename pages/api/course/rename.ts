import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'

import {
  getCourseInfo,
  renameCourse,
  findCourseByName
} from '@services/archive'

const RenameCourseBody = z.object({
  courseId: z.number(),
  name: z.string().min(1)
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('rename')
  if (req.method === 'POST') {
    try {
      const { courseId, name } = RenameCourseBody.parse(JSON.parse(req.body))

      const course = await getCourseInfo(courseId)
      if (!course) {
        return res.status(404).json({ error: 'course not found' })
      }

      if (!name) {
        return res.status(400).json({ error: 'name missing' })
      }

      const existingCourse = await findCourseByName(name.trim())

      if (existingCourse) {
        // req.flash(`Course ${existingCourse.name} already exists!`, 'error')
        return res
          .status(400)
          .json({ error: `Course ${existingCourse.name} already exists!` })
      }

      await renameCourse(course.id, name)
      return res.status(200).json({ ok: true })
    } catch (error) {
      console.log('Error renaming course', error)
      return res.status(500).json({ error: '500 Internal Server Error' })
    }
  } else {
    res.status(404).send('404 Not Found')
  }
}

export default handler
