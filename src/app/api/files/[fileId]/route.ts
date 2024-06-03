import { findFileById } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  {
    params
  }: {
    params: { fileId: string }
  }
) => {
  try {
    const isRights = await validateRights('access')
    if (!isRights) {
      return NextResponse.json(
        { error: '401 Unauthorized' },
        {
          status: 401
        }
      )
    }

    const fileId = parseInt(params.fileId, 10)

    const file = await findFileById(fileId)
    return NextResponse.json(file)
  } catch (e) {
    if ((e as Error).message === 'NEXT_NOT_FOUND') {
      return NextResponse.json({ error: '404 Not found' }, { status: 400 })
    }
    console.error('Error while getting file', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
