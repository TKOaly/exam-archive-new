import { getCourseListing } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
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

    const courses = await getCourseListing()
    return NextResponse.json(courses)
  } catch (e) {
    console.error('Error while getting courses', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
