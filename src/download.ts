import express from 'express'
import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl as getSignedS3Url } from '@aws-sdk/s3-request-presigner'

import config from './config'
import s3 from './service/s3'
import { findExamById } from './service/archive'
import { DbExam } from './db'

// age in seconds
const oneHourToSeconds = 60 * 60 * 1
const oneDayToSeconds = oneHourToSeconds * 24

const addDays = (date: Date, days: number) => {
  const ts = date.getTime()
  return new Date(ts + oneDayToSeconds * days * 1000)
}

const createSignedS3Url = async (exam: DbExam) => {
  const command = new GetObjectCommand({
    Bucket: config.AWS_S3_BUCKET_ID,
    Key: exam.file_path
  })

  const url = new URL(await getSignedS3Url(s3, command, { expiresIn: oneDayToSeconds }))
  const publicUrl = new URL(config.AWS_S3_ENDPOINT_PUBLIC)

  url.host = publicUrl.host
  url.port = publicUrl.port
  url.protocol = publicUrl.protocol

  return url.toString()
}

const createSignedUrl = (exam: DbExam) => createSignedS3Url(exam)

const router = express()

router.get('/:examId/:fileName', async (req, res, next) => {
  // fileName actually not used, just looks nicer to the user
  const examId = parseInt(req.params.examId, 10)

  if (isNaN(examId)) {
    return res.status(404).send('404')
  }

  const exam = await findExamById(examId)
  if (!exam) {
    return res.status(404).send('404')
  }

  const url = await createSignedUrl(exam)
  res.redirect(url)
})

export default router
