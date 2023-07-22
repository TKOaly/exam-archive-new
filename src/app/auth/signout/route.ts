import { NextResponse } from 'next/server'
import { getUserServiceLogoutUrl } from '@services/tkoUserService'
import config from '@lib/config'

export const GET = async (req: Request) => {
  const res = NextResponse.redirect(getUserServiceLogoutUrl())
  res.cookies.delete(config.COOKIE_NAME)
  return res
}
