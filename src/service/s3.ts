import { S3, S3ClientConfig } from '@aws-sdk/client-s3'
import config from '../config'

const s3Options: S3ClientConfig = {
  apiVersion: '2006-03-01',
  region: config.AWS_REGION
}

if (config.NODE_ENV === 'development') {
  s3Options.credentials = {
    accessKeyId: config.AWS_ACCESS_KEY_ID!,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY!
  }
  if (config.AWS_S3_ENDPOINT) {
    s3Options.endpoint = config.AWS_S3_ENDPOINT
  }
  if (config.AWS_S3_FORCE_PATH_STYLE) {
    s3Options.forcePathStyle = true
  }
}

const s3 = new S3(s3Options)

export default s3
