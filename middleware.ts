import { NextRequest, NextResponse } from 'next/server'
import { EncryptJWT, JWTPayload, jwtDecrypt } from 'jose'
import configs from '@lib/config'
import { authenticateUserServiceToken } from '@services/tkoUserService'
import { Session, UserMembership, UserRole } from '@lib/types'

const returnToSignin = () => {
  const res = NextResponse.redirect('http://127.0.0.1:9000/auth/signin')
  res.cookies.delete(configs.COOKIE_NAME)
  return res
}

const getDevSession = (): Session => ({
  user: {
    username: 'dev',
    membership: UserMembership.Jasen,
    role: UserRole.Yllapitaja
  },
  rights: { access: true, upload: true, remove: true, rename: true },
  token: 'totally-valid-token'
})

const signSession = async (session: Session) => {
  const signedSession = await new EncryptJWT(session as unknown as JWTPayload)
    .setProtectedHeader({ alg: 'PBES2-HS512+A256KW', enc: 'A256CBC-HS512' })
    .setIssuedAt()
    .setIssuer(configs.COOKIE_ISSUER)
    .setSubject(configs.COOKIE_SUBJECT)
    .setJti(configs.COOKIE_JWTID)
    .setExpirationTime('24h')
    .encrypt(configs.COOKIE_SECRET)

  return signedSession
}

const setCookieResponse = (signedSession: string) => {
  const res = NextResponse.next()
  res.cookies.set({
    name: configs.COOKIE_NAME,
    value: signedSession,
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'strict',
    secure: configs.NODE_ENV === 'production'
  })
  return res
}

export const middleware = async (req: NextRequest) => {
  const userServiceToken = req.cookies.get('token')
  if (!userServiceToken) {
    if (configs.NODE_ENV === 'development') {
      const signedSession = await signSession(getDevSession())
      return setCookieResponse(signedSession)
    }
    return returnToSignin()
  }

  try {
    const session = req.cookies.get(configs.COOKIE_NAME)
    if (!session) {
      const newSession = await authenticateUserServiceToken(
        userServiceToken.value
      )

      const signedSession = await signSession(newSession)
      return setCookieResponse(signedSession)
    }
    const { payload } = await jwtDecrypt(session.value, configs.COOKIE_SECRET, {
      issuer: configs.COOKIE_ISSUER,
      subject: configs.COOKIE_SUBJECT
    })

    if (!payload.jti || !payload.token || !payload.iat) {
      return returnToSignin()
    }

    if (
      payload.jti !== configs.COOKIE_JWTID ||
      payload.token !== userServiceToken.value ||
      payload.iat < configs.SERVER_START_TIMESTAMP / 1000
    ) {
      return returnToSignin()
    }

    return NextResponse.next()
  } catch (err) {
    console.error(err)
    return returnToSignin()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - auth (authentication routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - icon.svg (favicon file)
     * - robots.txt (robots file)
     */
    '/((?!api|auth|_next/static|_next/image|icon.svg|robots.txt).*)'
  ]
}
