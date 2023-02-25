import type { NextApiRequest, NextApiResponse } from 'next'

import { findCourseByName, createCourse } from '@services/archive'
import { urlForCourse } from '@utilities/courses'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // requireRights('upload')
  if (req.method === 'POST') {
    console.log('creating')
    const { courseName } = req.body

    const existingCourse = await findCourseByName(courseName.trim())

    if (existingCourse) {
      // req.flash(`Course ${existingCourse.name} already exists!`, 'error')
      return res.redirect('/')
    }

    const createdCourse = await createCourse({ name: courseName })

    //   req.flash(`Course "${createdCourse?.name ?? courseName}" created!`, 'info')
    res.redirect(
      createdCourse ? urlForCourse(createdCourse.id, createdCourse.name) : '/'
    )
  } else {
    console.log('ignoring, not post')
    res.redirect('/')
  }
}

export default handler
