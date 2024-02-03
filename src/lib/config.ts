const checkExists = (...values: (string | undefined)[]) => {
  for (const value of values) {
    if (!value || value.length === 0) {
      throw new Error(`The environment variable ${value} is not set.`)
    }
  }
}

// APP_ENV is different from NODE_ENV as Next.js defines just
// development for `next dev` and production `next build  && next start`.
// This does not allow usage of production build with development stuff
// like auto - login. There is Next RFP
// https://github.com/vercel/next.js/discussions/25764 but it is not yet
// implemented.

const NODE_ENV: string | undefined = process.env.NODE_ENV!
const APP_ENV: string | undefined = process.env.APP_ENV!
const PG_CONNECTION_STRING: string | undefined =
  process.env.PG_CONNECTION_STRING!
const USER_SERVICE_SERVICE_ID: string | undefined =
  process.env.USER_SERVICE_SERVICE_ID!
const USER_SERVICE_URL: string | undefined = process.env.USER_SERVICE_URL!
const USER_SERVICE_SECRET: string | undefined = process.env.USER_SERVICE_SECRET!
const NEXTAUTH_URL: string | undefined = process.env.NEXTAUTH_URL!
const NEXTAUTH_SECRET: string | undefined = process.env.NEXTAUTH_SECRET!
const AWS_REGION: string | undefined = process.env.AWS_REGION!
const AWS_ACCESS_KEY_ID: string | undefined = process.env.AWS_ACCESS_KEY_ID!
const AWS_SECRET_ACCESS_KEY: string | undefined =
  process.env.AWS_SECRET_ACCESS_KEY!
const AWS_S3_ENDPOINT: string | undefined = process.env.AWS_S3_ENDPOINT!
const AWS_S3_BUCKET_ID: string | undefined = process.env.AWS_S3_BUCKET_ID!

checkExists(NODE_ENV, APP_ENV, PG_CONNECTION_STRING)
checkExists(USER_SERVICE_SERVICE_ID, USER_SERVICE_URL, USER_SERVICE_SECRET)
checkExists(NEXTAUTH_URL, NEXTAUTH_SECRET)
checkExists(AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
checkExists(AWS_S3_ENDPOINT, AWS_S3_BUCKET_ID)

export default {
  NODE_ENV,
  APP_ENV,
  PG_CONNECTION_STRING,
  USER_SERVICE_SERVICE_ID,
  USER_SERVICE_URL,
  USER_SERVICE_SECRET,
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_S3_ENDPOINT,
  AWS_S3_BUCKET_ID
}
