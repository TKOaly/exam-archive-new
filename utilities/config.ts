import { IronSessionOptions } from 'iron-session'

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
  AWS_S3_ENDPOINT,
  AWS_S3_FORCE_PATH_STYLE,
  AWS_REGION,
  AWS_S3_BUCKET_ID,
  AWS_CF_KEY_ID,
  AWS_CF_KEY,
  AWS_CF_DISTRIBUTION_DOMAIN,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  TRUST_PROXY_IPS
} = process.env

assertSet({
  COOKIE_SECRET,
  AWS_REGION,
  AWS_S3_BUCKET_ID
})

if (NODE_ENV !== 'development') {
  assertSet({
    AWS_CF_KEY_ID,
    AWS_CF_KEY,
    AWS_CF_DISTRIBUTION_DOMAIN,
    USER_SERVICE_SERVICE_ID,
    USER_SERVICE_URL
  })
}

const DEFAULT_PORT = '9001'

export const SERVER_START_TIMESTAMP = Date.now()

export default {
  PORT: parseInt(PORT || DEFAULT_PORT, 10),
  NODE_ENV: NODE_ENV!,
  COOKIE_SECRET: COOKIE_SECRET!,
  USER_SERVICE_SERVICE_ID: USER_SERVICE_SERVICE_ID!,
  USER_SERVICE_URL: USER_SERVICE_URL!,
  AWS_S3_ENDPOINT: AWS_S3_ENDPOINT,
  AWS_S3_FORCE_PATH_STYLE: AWS_S3_FORCE_PATH_STYLE === 'true',
  AWS_REGION: AWS_REGION!,
  AWS_S3_BUCKET_ID: AWS_S3_BUCKET_ID!,
  AWS_CF_KEY: AWS_CF_KEY!,
  AWS_CF_KEY_ID: AWS_CF_KEY_ID!,
  AWS_CF_DISTRIBUTION_DOMAIN: AWS_CF_DISTRIBUTION_DOMAIN!,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  TRUST_PROXY_IPS: TRUST_PROXY_IPS ? TRUST_PROXY_IPS.split(',') : []
}
export const sessionOptions: IronSessionOptions = {
  cookieName: 'tarpisto',
  password: COOKIE_SECRET as string,
  cookieOptions: {
    httpOnly: true,
    sameSite: 'strict', // should be strict
    maxAge: 86400, // 24h
    secure: NODE_ENV === 'production'
  }
}
