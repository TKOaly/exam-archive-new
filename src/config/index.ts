const { NODE_ENV } = process.env
const assertSet = (obj: any) =>
  Object.entries(obj).forEach(([key, val]) => {
    if (!val) {
      throw new Error(`Required environment variable ${key} is not set!`)
    }
  })

assertSet({ NODE_ENV })

if (NODE_ENV === 'development') {
  require('dotenv').config()
}

const {
  PORT,
  COOKIE_SECRET,
  USER_SERVICE_SERVICE_ID,
  USER_SERVICE_URL,
  AWS_REGION,
  AWS_S3_BUCKET_ID,
  AWS_CF_KEY_ID,
  AWS_CF_KEY,
  AWS_CF_DISTRIBUTION_DOMAIN,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} = process.env
assertSet({
  COOKIE_SECRET,
  USER_SERVICE_SERVICE_ID,
  USER_SERVICE_URL,
  AWS_REGION,
  AWS_S3_BUCKET_ID,
  AWS_CF_KEY_ID,
  AWS_CF_KEY,
  AWS_CF_DISTRIBUTION_DOMAIN
})

const DEFAULT_PORT = '9001'

export default {
  PORT: parseInt(PORT || DEFAULT_PORT, 10),
  NODE_ENV: NODE_ENV!,
  COOKIE_SECRET: COOKIE_SECRET!,
  USER_SERVICE_SERVICE_ID: USER_SERVICE_SERVICE_ID!,
  USER_SERVICE_URL: USER_SERVICE_URL!,
  AWS_REGION: AWS_REGION!,
  AWS_S3_BUCKET_ID: AWS_S3_BUCKET_ID!,
  AWS_CF_KEY: AWS_CF_KEY!,
  AWS_CF_KEY_ID: AWS_CF_KEY_ID!,
  AWS_CF_DISTRIBUTION_DOMAIN: AWS_CF_DISTRIBUTION_DOMAIN!,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
}
