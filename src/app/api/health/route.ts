import { NextResponse } from 'next/server'

import { testConnection } from '@lib/db'

export const dynamic = 'force-dynamic'

export const GET = async (req: Request) => {
  try {
    testConnection()
    return new NextResponse('Health check ok', { status: 200 })
  } catch (e) {
    console.error('Health check failed:', e)
    return new NextResponse('Health check failed', { status: 500 })
  }
}
