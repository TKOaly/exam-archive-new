import type { NextApiRequest, NextApiResponse } from 'next'

import { getCourseListing } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { withSessionRoute } from '@lib/sessions'

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const isRights = validateRights(req.session.rights, 'access')
      if (!isRights) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }

      const courses = await getCourseListing()
      return res.status(200).json(courses)
    } catch (e) {
      console.error('Error while getting courses', e)
      res.status(500).json({ error: '500 Internal server error' })
    }
  } else {
    res.status(405).send({ error: '405 Unvalid method' })
  }
}

const handler = withSessionRoute(get)

export default handler
