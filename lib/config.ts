import z from 'zod'
import { IronSessionOptions } from 'iron-session'

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  PG_CONNECTION_STRING: z.string(),
  COOKIE_SECRET: z.string(),
  USER_SERVICE_SERVICE_ID: z.string(),
  USER_SERVICE_URL: z.string(),
  AWS_REGION: z.string(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  AWS_S3_ENDPOINT: z.string(),
  AWS_S3_FORCE_PATH_STYLE: z.string(),
  AWS_S3_BUCKET_ID: z.string()
})

export const SERVER_START_TIMESTAMP = Date.now()

const config = EnvSchema.parse(process.env)

export default { ...config, SERVER_START_TIMESTAMP }

export const sessionOptions: IronSessionOptions = {
  cookieName: 'tarpisto',
  password: config.COOKIE_SECRET as string,
  cookieOptions: {
    httpOnly: true,
    sameSite: 'strict', // should be strict
    maxAge: 86400, // 24h
    secure: config.NODE_ENV === 'production'
  }
}
