import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const GET = async (
  req: Request,
  {
    params
  }: {
    params: { mode: string }
  }
) => {
  if (params.mode === 'out') {
    return new Response(null, {
      status: 302,
      headers: { Location: 'https://tko-aly.fi' }
    })
  }

  redirect('/')
}
