import { encode } from 'next-auth/jwt'
import { BrowserContext } from '@playwright/test'
import config from '@lib/config'
import { UserMembership, UserRights, UserRole, AccessRight } from '@lib/types'

const roleRights: {
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

export const getToken = async (
  userRole?: UserRole,
  userMembership?: UserMembership,
  userRights?: UserRights
) => {
  const role = userRole || UserRole.Yllapitaja
  const rights = userRights ? userRights : roleRights[role]
  const token = await encode({
    token: {
      name: `test-${userRole}`,
      role,
      membership: userMembership || UserMembership.Jasen,
      rights
    },
    secret: config.USER_SERVICE_SECRET
  })
  return token
}

export const setAuthentication = async (
  context: BrowserContext,
  userRole?: UserRole,
  userMembership?: UserMembership,
  userRights?: UserRights
) => {
  const token = await getToken(userRole, userMembership, userRights)

  return await context.addCookies([
    {
      name: 'next-auth.session-token',
      value: token,
      domain: '127.0.0.1',
      path: '/',
      httpOnly: true,
      sameSite: 'Lax',
      expires: -1
    }
  ])
}
