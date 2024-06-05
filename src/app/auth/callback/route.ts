import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  return new Response(null, { status: 404 })
}
