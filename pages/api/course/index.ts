import type { NextApiRequest, NextApiResponse } from 'next'

import { getCourseListing } from '@services/archive'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('')
  if (req.method === 'GET') {
    try {
      const courses = await getCourseListing()
      return res.status(200).json(courses)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'internal server error' })
    }
  } else {
    res.status(405).send('unvalid method')
  }
}

export default handler
