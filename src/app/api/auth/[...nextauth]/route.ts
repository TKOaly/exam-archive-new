import NextAuth from 'next-auth'
import { authConfig } from '@services/tkoUserService'

export const dynamic = 'force-dynamic'

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
