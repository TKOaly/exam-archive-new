import knex from 'knex'
import { Pool, Client } from 'pg'
import config, { knexConfig } from '@utilities/config'

interface KnexTimestamped {
  created_at: number
  updated_at: number | null
}

export interface DbCourse extends KnexTimestamped {
  id: number
  name: string
}

export interface DbExam extends KnexTimestamped {
  id: number
  course_id: number
  file_name: string
  mime_type: string
  file_path: string
  upload_date: Date
}

export const db = knex(knexConfig[process.env.NODE_ENV])

export const testConnection = async () => {
  await db('courses').count('id')
}

let dbPool: Pool

if (process.env.NODE_ENV === 'production') {
  dbPool = new Pool({
    connectionString: config.PG_CONNECTION_STRING
  })
} else {
  if (!global.dbPool) {
    global.dbPool = new Pool({
      connectionString: config.PG_CONNECTION_STRING
    })
  }
  dbPool = global.dbPool
}

export { dbPool }
