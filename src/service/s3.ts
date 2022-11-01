import AWS from 'aws-sdk'
import config from '../config'

const globalAwsOptions: AWS.ConfigurationOptions = {
  region: config.AWS_REGION
}

const s3Options: AWS.S3.ClientConfiguration = {
  apiVersion: '2006-03-01'
}

if (config.NODE_ENV === 'development') {
  globalAwsOptions.credentials = {
    accessKeyId: config.AWS_ACCESS_KEY_ID!,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY!
  }
  if (config.AWS_S3_ENDPOINT) {
    s3Options.endpoint = config.AWS_S3_ENDPOINT
  }
  if (config.AWS_S3_FORCE_PATH_STYLE) {
    s3Options.s3ForcePathStyle = true
  }
}

AWS.config.update(globalAwsOptions)
const s3 = new AWS.S3(s3Options)

export default s3
