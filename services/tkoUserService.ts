import querystring from 'querystring'
import { cookies, headers } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import config, {
  SERVER_START_TIMESTAMP,
  sessionOptions
} from '@utilities/config'
import { unsealData, IronSessionData } from 'iron-session'

import {
  UserRole,
  UserMembership,
  UserServiceUser,
  AccessRight
} from '@utilities/types'

export const isActiveMember = ({ membership }: UserServiceUser) =>
  membership === UserMembership.Jasen ||
  membership === UserMembership.Kannatusjasen ||
  membership === UserMembership.Kunniajasen ||
  membership === UserMembership.Ulkojasen

export const roleRights: {
  [role in UserRole]: { [right in AccessRight]: boolean }
} = {
  [UserRole.Kayttaja]: {
    access: true,
    upload: true,
    remove: false,
    rename: false
  },
  [UserRole.Tenttiarkistovirkailija]: {
    access: true,
    upload: true,
    remove: true,
    rename: true
  },
  [UserRole.Jasenvirkailija]: {
    access: true,
    upload: true,
    remove: false,
    rename: true
  },
  [UserRole.Virkailija]: {
    access: true,
    upload: true,
    remove: false,
    rename: true
  },
  [UserRole.Yllapitaja]: {
    access: true,
    upload: true,
    remove: true,
    rename: true
  }
}

export const getUserServiceLoginUrl = () => {
  const query = querystring.stringify({
    serviceIdentifier: config.USER_SERVICE_SERVICE_ID
  })
  return `${config.USER_SERVICE_URL}?${query}`
}

export const getUserServiceLogoutUrl = () => {
  const query = querystring.stringify({
    serviceIdentifier: config.USER_SERVICE_SERVICE_ID
  })
  return `${config.USER_SERVICE_URL}/logout?${query}`
}

interface UserServicePayload<T> {
  ok: boolean
  message: string
  payload: T
}

const withHeaders = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
    service: config.USER_SERVICE_SERVICE_ID
  }
})

export const getMe = async (
  token: string
): Promise<UserServicePayload<UserServiceUser>> => {
  const data = await fetch(
    `${config.USER_SERVICE_URL}/api/users/me`,
    withHeaders(token)
  )

  return await data.json()
}

export const authenticateUserServiceToken = async (token: string) => {
  const me = await getMe(token)
  if (!me.ok) {
    // means token not valid, redirect to error page
    notFound()
  }

  const user = me.payload

  if (!isActiveMember(user)) {
    // not allowed to see, redirect to error page
    notFound()
  }

  return {
    user,
    rights: roleRights[user.role],
    token,
    timestamp: Date.now()
  }
}

export const getSession = async () => {
  const cookiesStore = cookies()
  const token = cookiesStore.get('token')
  const sealedSession = cookiesStore.get(sessionOptions.cookieName)

  if (!sealedSession || !token) {
    return redirect(getUserServiceLoginUrl())
  }

  const session: IronSessionData = await unsealData(
    sealedSession.value,
    sessionOptions
  )

  if (
    session.token !== token.value ||
    session.timestamp < SERVER_START_TIMESTAMP
  ) {
    return redirect(getUserServiceLoginUrl())
  }

  return session
}

export const validateRights = (
  userRights: { [right in AccessRight]: boolean },
  ...neededRights: AccessRight[]
) => {
  return neededRights.every(right => userRights[right])
}
