import express from 'express'
import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl as getSignedS3Url } from '@aws-sdk/s3-request-presigner'
import { getSignedUrl as getSignedCFUrl } from '@aws-sdk/cloudfront-signer'

import config from './config'
import s3 from './service/s3'
import { findExamById } from './service/archive'
import { DbExam } from './db'

// age in seconds
const oneHourToSeconds = 60 * 60 * 1
const oneDayToSeconds = oneHourToSeconds * 24

const getUrlExpirationTimestamp = () =>
  Math.floor(new Date().getTime() / 1000) + oneDayToSeconds

const getCloudFrontUrl = (exam: DbExam) =>
  `https://${config.AWS_CF_DISTRIBUTION_DOMAIN}/${exam.file_path}`

const createSignedCloudFrontUrl = (exam: DbExam) => {
  return getSignedCFUrl({
    url: getCloudFrontUrl(exam),
    keyPairId: config.AWS_CF_KEY_ID,
    dateLessThan: new Date(getUrlExpirationTimestamp()).toISOString(),
    privateKey: config.AWS_CF_KEY
  })
}

const createSignedS3Url = (exam: DbExam) => {
  const command = new GetObjectCommand({
    Bucket: config.AWS_S3_BUCKET_ID,
    Key: exam.file_path
  })
  return getSignedS3Url(s3, command, { expiresIn: oneDayToSeconds })
}

const createSignedUrl = (exam: DbExam) => {
  const signer = config.AWS_CF_KEY
    ? createSignedCloudFrontUrl
    : createSignedS3Url
  return signer(exam)
}

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
