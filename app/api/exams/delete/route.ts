import { z } from 'zod'

import { findCourseByExamId, deleteExam } from '@services/archive'
import { getSession } from '@lib/sessions'
import { validateRights } from '@services/tkoUserService'
import { NextRequest, NextResponse } from 'next/server'

const DeleteExamBody = z
  .object({
    examId: z.number()
  })
  .transform(examId => examId.examId)

export const POST = async (req: NextRequest) => {
  try {
    const { rights } = await getSession()
    const isRights = validateRights(rights, 'remove')
    if (!isRights) {
      return NextResponse.json(
        { error: '401 Unauthorized' },
        {
          status: 401
        }
      )
    }

    const body = await req.json()

    const examId = DeleteExamBody.parse(body)

    const course = await findCourseByExamId(examId)
    if (!course) {
      return NextResponse.json(
        { error: `Exam does not exist.` },
        {
          status: 404
        }
      )
    }

    await deleteExam(examId)
    // don't delete from S3, purge S3 objects with no references separately via admin panel
    // also, TODO admin panel lol!

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Error while deleting exam', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
