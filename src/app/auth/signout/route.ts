import config from '@lib/config'
import { cookies } from 'next/headers'

export const POST = async (req: Request) => {
  const cookiesIn = await cookies()

  const csrfResponse = await fetch(`${config.NEXTAUTH_URL}/api/auth/csrf`, {
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookiesIn.toString()
    }
  })
  const csrf = await csrfResponse.json()

  const authResponse = await fetch(
    `${config.NEXTAUTH_URL}/api/auth/signout/tkoaly`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: cookiesIn.toString()
      },
      body: `csrfToken=${csrf.csrfToken}&callbackUrl=${config.NEXTAUTH_URL}&json=true`,
      method: 'POST'
    }
  )
  const auth = await authResponse.json()

  const headers = new Headers(authResponse.headers)
  headers.set('Location', auth.url)

  return new Response(null, { status: 302, headers: headers })
}
