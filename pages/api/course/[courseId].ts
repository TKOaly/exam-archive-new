import type { NextApiRequest, NextApiResponse } from 'next'

import { getCourseInfo } from '@services/archive'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('')
  if (req.method === 'GET') {
    const { courseId: unparsedCourseId } = req.query
    const courseId = parseInt(unparsedCourseId as string, 10)
    try {
      const course = await getCourseInfo(courseId)
      return res.status(200).json(course)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'internal server error' })
    }
  } else {
    res.status(405).send('unvalid method')
  }
}

export default handler
