import config from '@lib/config'

export const dynamic = 'force-dynamic'

export const GET = async (req: Request) => {
  const csrfResponse = await fetch(`${config.NEXTAUTH_URL}/api/auth/csrf`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const csrf = await csrfResponse.json()

  const authResponse = await fetch(
    `${config.NEXTAUTH_URL}/api/auth/signin/tkoaly`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: csrfResponse.headers
          .getSetCookie()
          .reduce((prev, next) => prev + next.split(';')[0] + '; ', '')
      },
      body: `csrfToken=${csrf.csrfToken}&callbackUrl=${config.NEXTAUTH_URL}&json=true`,
      method: 'POST'
    }
  )
  const auth = await authResponse.json()

  const headers = new Headers()
  headers.set('Location', auth.url)
  headers.set(
    'set-cookie',
    `${authResponse.headers.get('set-cookie')}; ${csrfResponse.headers.get('set-cookie')}`
  )

  return new Response(null, { status: 302, headers: headers })
}
