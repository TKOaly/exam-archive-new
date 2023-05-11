import { authenticateUserServiceToken } from '@services/tkoUserService'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from '@lib/sessions'

const callback = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.cookies.token

    if (!token) {
      console.log('No token found in cookies')
      return res.status(401).json({ error: '401 Unauthorized' })
    }

    const session = await authenticateUserServiceToken(token)

    if (!session) {
      console.log('No session found')
      return res.status(401).json({ error: '401 Unauthorized' })
    }

    req.session.user = session.user
    req.session.rights = session.rights
    req.session.token = session.token
    req.session.timestamp = session.timestamp
    await req.session.save()

    return res.redirect('/')
  } catch (e) {
    return res.status(401).json({ error: '401 Unauthorized' })
  }
}

const handler = withSessionRoute(callback)

export default handler
