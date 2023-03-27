import { z } from 'zod'
import type { NextApiRequest, NextApiResponse } from 'next'

import {
  getCourseInfo,
  renameCourse,
  findCourseByName
} from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { withSessionRoute } from '@utilities/sessions'

const RenameCourseBody = z.object({
  courseId: z.number(),
  name: z.string().min(1)
})

const rename = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const isRights = validateRights(req.session.rights, 'rename')
      if (!isRights) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }

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
    res.status(405).send({ error: 'unvalid method' })
  }
}

const handler = withSessionRoute(rename)

export default handler
