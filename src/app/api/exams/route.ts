import { getAllExams } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
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

    const exams = await getAllExams()
    return NextResponse.json(exams)
  } catch (e) {
    console.error('Error while getting exams', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
