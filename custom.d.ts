import { Pool } from 'pg'
import { DefaultUser } from 'next-auth'
import { UserMembership, UserRole, AccessRight } from '@lib/types'

declare global {
  var dbPool: Pool | undefined
}
