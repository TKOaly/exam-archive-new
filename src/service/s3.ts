import { S3, S3ClientConfig } from '@aws-sdk/client-s3'
import config from '../config'

const s3Options: S3ClientConfig = {
  apiVersion: '2006-03-01',
  region: config.AWS_REGION,
  forcePathStyle: true
}

const s3 = new S3(s3Options)

export default s3
