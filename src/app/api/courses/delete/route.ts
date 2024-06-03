import { z } from 'zod'
import {
  deleteCourse,
  CourseNotFoundError,
  CannotDeleteError
} from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { NextRequest, NextResponse } from 'next/server'

const DeleteCourseBody = z
  .object({
    courseId: z.number()
  })
  .transform(courseId => courseId.courseId)

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

    const courseId = DeleteCourseBody.parse(body)
    const deletedCourse = await deleteCourse(courseId)

    return NextResponse.json({ ok: true })
  } catch (e) {
    if ((e as Error).message === 'NEXT_NOT_FOUND') {
      return NextResponse.json({ error: '404 Not found' }, { status: 400 })
    }
    if (e instanceof CourseNotFoundError) {
      return NextResponse.json(
        { error: e.message },
        {
          status: 404
        }
      )
    }
    if (e instanceof CannotDeleteError) {
      return NextResponse.json(
        { error: e.message },
        {
          status: 400
        }
      )
    }

    console.error('Error while deleting course', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
