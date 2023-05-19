import config from '@lib/config'
import { jwtDecrypt } from 'jose'
import { cookies } from 'next/headers'
import { getUserServiceLoginUrl } from '@services/tkoUserService'
import { redirect } from 'next/navigation'
import { AccessRight, AuthData, UserServiceUser } from './types'
import { NextApiRequest } from 'next'

export const getSession = async (): Promise<AuthData> => {
  const cookiesStore = cookies()
  const session = cookiesStore.get(config.COOKIE_NAME)

  if (!session) {
    redirect(getUserServiceLoginUrl())
  }

  const { payload } = await jwtDecrypt(session.value, config.COOKIE_SECRET, {
    issuer: config.COOKIE_ISSUER,
    subject: config.COOKIE_SUBJECT
  })

  return {
    user: payload.user as UserServiceUser,
    rights: payload.rights as { [right in AccessRight]: boolean }
  }
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

  const { payload } = await jwtDecrypt(session, config.COOKIE_SECRET, {
    issuer: config.COOKIE_ISSUER,
    subject: config.COOKIE_SUBJECT
  })

  return {
    user: payload.user as UserServiceUser,
    rights: payload.rights as { [right in AccessRight]: boolean }
  }
}
