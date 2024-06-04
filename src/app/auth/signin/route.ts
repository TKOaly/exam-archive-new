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
      body: `csrfToken=${csrf.csrfToken}&callbackUrl=http%3A%2F%2F127.0.0.1%3A9000%2F&json=true`,
      method: 'POST'
    }
  )
  const auth = await authResponse.json()

  const headers = new Headers(authResponse.headers)
  headers.set('Location', auth.url)

  return new Response(null, { status: 302, headers: headers })
}
