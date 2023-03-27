import { getUserServiceLogoutUrl } from '@services/tkoUserService'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from '@utilities/sessions'

const signOut = (req: NextApiRequest, res: NextApiResponse) => {
  req.session.destroy()
  res.redirect(getUserServiceLogoutUrl())
}

const handler = withSessionRoute(signOut)

export default handler
