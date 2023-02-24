import type { NextApiRequest, NextApiResponse } from 'next'

import { getCourseInfo, renameCourse } from '@services/archive'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('rename')
  if (req.method === 'POST') {
    const { courseId: unparsedCourseId } = req.query
    const courseId = parseInt(unparsedCourseId as string, 10)
    try {
      const course = await getCourseInfo(courseId)
      if (!course) {
        return res.status(404).json({ error: 'course not found' })
      }

      if (!req.body.name) {
        return res.status(400).json({ error: 'name missing' })
      }

      await renameCourse(course.id, req.body.name)
      return res.status(200).json({ ok: true })
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'internal server error' })
    }
  } else {
    console.log('ignoring, not post')
    res.redirect('/')
  }
}

export default handler
