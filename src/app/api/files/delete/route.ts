import { z } from 'zod'

import { findCourseByFileId, deleteFile } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { NextRequest, NextResponse } from 'next/server'

const DeleteFileBody = z
  .object({
    fileId: z.number()
  })
  .transform(fileId => fileId.fileId)

export const POST = async (req: NextRequest) => {
  try {
    const isRights = await validateRights('remove')
    if (!isRights) {
      return NextResponse.json(
        { error: '401 Unauthorized' },
        {
          status: 401
        }
      )
    }

    const body = await req.json()

    const fileId = DeleteFileBody.parse(body)

    const course = await findCourseByFileId(fileId)
    if (!course) {
      return NextResponse.json(
        { error: `Exam does not exist.` },
        {
          status: 404
        }
      )
    }

    await deleteFile(fileId)
    // don't delete from S3, purge S3 objects with no references separately via admin panel
    // also, TODO admin panel lol!

    return NextResponse.json({ ok: true })
  } catch (e) {
    if ((e as Error).message === 'NEXT_NOT_FOUND') {
      return NextResponse.json({ error: '404 Not found' }, { status: 400 })
    }
    console.error('Error while deleting exam', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
