import { NextResponse } from 'next/server'
import { getUserServiceLoginUrl } from '@services/tkoUserService'

export const GET = async (req: Request) => {
  return NextResponse.redirect(getUserServiceLoginUrl())
}
