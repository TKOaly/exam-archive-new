import { NextRequest, NextResponse } from 'next/server'
import { EncryptJWT, jwtDecrypt } from 'jose'
import configs from '@lib/config'
import { authenticateUserServiceToken } from '@services/tkoUserService'

const returnToSignin = () => {
  const res = NextResponse.redirect('http://127.0.0.1:9000/auth/signin')
  res.cookies.delete(configs.COOKIE_NAME)
  return res
}

export const middleware = async (req: NextRequest) => {
  const userServiceToken = req.cookies.get('token')
  if (!userServiceToken) {
    return returnToSignin()
  }
  try {
    const session = req.cookies.get(configs.COOKIE_NAME)
    if (!session) {
      const newSession = await authenticateUserServiceToken(
        userServiceToken.value
      )

      const signedSession = await new EncryptJWT(newSession)
        .setProtectedHeader({ alg: 'PBES2-HS512+A256KW', enc: 'A256CBC-HS512' })
        .setIssuedAt()
        .setIssuer(configs.COOKIE_ISSUER)
        .setSubject(configs.COOKIE_SUBJECT)
        .setJti(configs.COOKIE_JWTID)
        .setExpirationTime('24h')
        .encrypt(configs.COOKIE_SECRET)

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
