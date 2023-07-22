import { getSession } from '@lib/sessions'
import { findExamById } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  {
    params
  }: {
    params: { examId: string }
  }
) => {
  try {
    const { rights } = await getSession()
    const isRights = validateRights(rights, 'access')
    if (!isRights) {
      return NextResponse.json(
        { error: '401 Unauthorized' },
        {
          status: 401
        }
      )
    }

    const examId = parseInt(params.examId, 10)

    const exam = await findExamById(examId)
    return NextResponse.json(exam)
  } catch (e) {
    console.error('Error while getting exam', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
