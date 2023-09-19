import { z } from 'zod'
import {
  getCourseInfo,
  renameCourse,
  findCourseByName
} from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import { NextRequest, NextResponse } from 'next/server'

const RenameCourseBody = z.object({
  courseId: z.number(),
  name: z.string().min(1)
})

export const POST = async (req: NextRequest) => {
  try {
    const isRights = await validateRights('rename')
    if (!isRights) {
      return NextResponse.json(
        { error: '401 Unauthorized' },
        {
          status: 401
        }
      )
    }

    const body = await req.json()

    const { courseId, name } = RenameCourseBody.parse(body)

    const course = await getCourseInfo(courseId)
    if (!course) {
      return NextResponse.json(
        { error: `course not found` },
        {
          status: 404
        }
      )
    }

    if (!name) {
      return NextResponse.json(
        { error: `name missing` },
        {
          status: 400
        }
      )
    }

    const existingCourse = await findCourseByName(name.trim())

    if (existingCourse) {
      return NextResponse.json(
        { error: `Course ${existingCourse.name} already exists!` },
        {
          status: 400
        }
      )
    }

    await renameCourse(course.id, name)
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Error while renaming course', e)
    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
