import { z } from 'zod'
import {
  deleteCourse,
  CourseNotFoundError,
  CannotDeleteError
} from '@services/archive'
import { getSession } from '@lib/sessions'
import { validateRights } from '@services/tkoUserService'
import { NextRequest, NextResponse } from 'next/server'

const DeleteCourseBody = z
  .object({
    courseId: z.number()
  })
  .transform(courseId => courseId.courseId)

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

    const courseId = DeleteCourseBody.parse(body)
    const deletedCourse = await deleteCourse(courseId)

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Error while deleting course', e)
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
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
