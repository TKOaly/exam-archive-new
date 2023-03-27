import { getUserServiceLoginUrl } from '@services/tkoUserService'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.redirect(getUserServiceLoginUrl())
}

export default handler
