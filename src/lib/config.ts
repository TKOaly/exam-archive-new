const getFromEnv = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`The environment variable ${key} is not set.`)
  }
  return value
}

// APP_ENV is different from NODE_ENV as Next.js defines just
// development for `next dev` and production `next build  && next start`.
// This does not allow usage of production build with development stuff
// like auto - login. There is Next RFP
// https://github.com/vercel/next.js/discussions/25764 but it is not yet
// implemented.

const NODE_ENV: string = getFromEnv('NODE_ENV')
const APP_ENV: string = getFromEnv('APP_ENV')
const PG_CONNECTION_STRING: string = getFromEnv('PG_CONNECTION_STRING')
const USER_SERVICE_SERVICE_ID: string = getFromEnv('USER_SERVICE_SERVICE_ID')
const USER_SERVICE_URL: string = getFromEnv('USER_SERVICE_URL')
const USER_SERVICE_SECRET: string = getFromEnv('USER_SERVICE_SECRET')
const NEXTAUTH_URL: string = getFromEnv('NEXTAUTH_URL')
getFromEnv('NEXTAUTH_SECRET') // Checks if exists, NextAuth uses under the hood
const AWS_REGION: string = getFromEnv('AWS_REGION')
const AWS_ACCESS_KEY_ID: string = getFromEnv('AWS_ACCESS_KEY_ID')
const AWS_SECRET_ACCESS_KEY: string = getFromEnv('AWS_SECRET_ACCESS_KEY')
const AWS_S3_ENDPOINT: string = getFromEnv('AWS_S3_ENDPOINT')
const AWS_S3_BUCKET_ID: string = getFromEnv('AWS_S3_BUCKET_ID')
const OTEL_SERVICE_NAME: string = getFromEnv('OTEL_SERVICE_NAME')
const OTEL_ENDPOINT: string = getFromEnv('OTEL_ENDPOINT')
const OTEL_AUTHORIZATION: string = getFromEnv('OTEL_AUTHORIZATION')

export default {
  NODE_ENV,
  APP_ENV,
  PG_CONNECTION_STRING,
  USER_SERVICE_SERVICE_ID,
  USER_SERVICE_URL,
  USER_SERVICE_SECRET,
  NEXTAUTH_URL,
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_S3_ENDPOINT,
  AWS_S3_BUCKET_ID,
  OTEL_SERVICE_NAME,
  OTEL_ENDPOINT,
  OTEL_AUTHORIZATION
}
