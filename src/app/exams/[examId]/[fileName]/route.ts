import { NextResponse } from 'next/server'

import config from '@lib/config'
import { findExamById } from '@services/archive'
import s3 from '@services/s3'
import { validateRights } from '@services/tkoUserService'

export const GET = async (
  req: Request,
  { params }: { params: { examId: string; fileName: string } }
) => {
  const isRights = await validateRights('access')

  if (!isRights) {
    return new NextResponse('401 Unauthorized', { status: 401 })
  }

  const examId = parseInt(params.examId, 10)
  if (isNaN(examId)) {
    return new NextResponse('404 Exam file not found', { status: 404 })
  }
  const exam = await findExamById(examId)
  if (!exam) {
    return new NextResponse('404 Exam file not found', { status: 404 })
  }

  const stream = await s3.getObject({
    Bucket: config.AWS_S3_BUCKET_ID,
    Key: exam.filePath
  })

  if (!stream || !stream.Body) {
    return new NextResponse('404 Exam file not found', { status: 404 })
  }

  return new NextResponse(stream.Body.transformToWebStream(), {
    headers: { 'Content-Type': exam.mimeType }
  })
}
