import config from '@lib/config'
import { jwtDecrypt } from 'jose'
import { cookies } from 'next/headers'
import { getUserServiceLoginUrl } from '@services/tkoUserService'
import { redirect } from 'next/navigation'
import { AccessRight, AuthData, UserServiceUser } from './types'
import { NextApiRequest } from 'next'

export const getSessionCookie = () => {
  const cookiesStore = cookies()
  const session = cookiesStore.get(config.COOKIE_NAME)

  if (!session) {
    return null
  }

  return session.value
}

export const decryptSession = async (session: string) => {
  const { payload } = await jwtDecrypt(session, config.COOKIE_SECRET, {
    issuer: config.COOKIE_ISSUER,
    subject: config.COOKIE_SUBJECT
  })
  return {
    user: payload.user as UserServiceUser,
    rights: payload.rights as { [right in AccessRight]: boolean }
  }
}

export const getSession = async (): Promise<AuthData> => {
  const session = getSessionCookie()

  if (!session) {
    console.log('No session found, redirecting to login')
    redirect(getUserServiceLoginUrl())
  }

  return decryptSession(session)
}

export const getLegacyApiSession = async (
  req: NextApiRequest
): Promise<AuthData | null> => {
  if (!req.cookies) {
    return null
  }
  const session = req.cookies[config.COOKIE_NAME]

  if (!session) {
    return null
  }

  return decryptSession(session)
}
