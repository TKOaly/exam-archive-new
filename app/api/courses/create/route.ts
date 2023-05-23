import { z } from 'zod'
import { findCourseByName, createCourse } from '@services/archive'
import { getSession } from '@lib/sessions'
import { validateRights } from '@services/tkoUserService'
import { NextRequest, NextResponse } from 'next/server'

const CreateCourseBody = z
  .object({
    courseName: z.string().min(1)
  })
  .transform(body => body.courseName)

export const POST = async (req: NextRequest) => {
  try {
    const { rights } = await getSession()
    const isRights = validateRights(rights, 'upload')
    if (!isRights) {
      return NextResponse.json(
        { error: '401 Unauthorized' },
        {
          status: 401
        }
      )
    }

    const body = await req.json()

    const courseName = CreateCourseBody.parse(body)
    const existingCourse = await findCourseByName(courseName.trim())

    if (existingCourse) {
      return NextResponse.json(
        { error: `Course ${existingCourse.name} already exists!` },
        {
          status: 400
        }
      )
    }

    const createdCourse = await createCourse({ name: courseName })

    return NextResponse.json(createdCourse)
  } catch (e) {
    console.error('Error while deleting course', e)

    return NextResponse.json(
      { error: '500 Internal Server Error' },
      {
        status: 500
      }
    )
  }
}
