import { redirect } from 'next/navigation'

export const GET = async (req: Request) => {
  redirect('/api/auth/signout')
}
