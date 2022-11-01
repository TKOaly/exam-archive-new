import express from 'express'
import AWS from 'aws-sdk'

import config from './config'
import s3 from './service/s3'
import { findExamById } from './service/archive'
import { DbExam } from './db'

const getCfSigner = (() => {
  let signer: AWS.CloudFront.Signer | null = null
  return () => {
    if (!signer) {
      signer = new AWS.CloudFront.Signer(
        config.AWS_CF_KEY_ID,
        config.AWS_CF_KEY
      )
    }
    return signer
  }
})()

// age in seconds
const oneHourToSeconds = 60 * 60 * 1
const oneDayToSeconds = oneHourToSeconds * 24

const getUrlExpirationTimestamp = () =>
  Math.floor(new Date().getTime() / 1000) + oneDayToSeconds

const getCloudFrontUrl = (exam: DbExam) =>
  `https://${config.AWS_CF_DISTRIBUTION_DOMAIN}/${exam.file_path}`

const getCfSigningOptions = (
  exam: DbExam
): AWS.CloudFront.Signer.SignerOptionsWithoutPolicy => ({
  expires: getUrlExpirationTimestamp(),
  url: getCloudFrontUrl(exam)
})

const createSignedCloudFrontUrl = (exam: DbExam) =>
  new Promise<string>((resolve, reject) => {
    getCfSigner().getSignedUrl(getCfSigningOptions(exam), (err, url) =>
      err ? reject(err) : resolve(url)
    )
  })

const createSignedS3Url = (exam: DbExam) =>
  s3.getSignedUrlPromise('getObject', {
    Bucket: config.AWS_S3_BUCKET_ID,
    Key: exam.file_path,
    Expires: getUrlExpirationTimestamp()
  })

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
