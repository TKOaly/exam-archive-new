import { knex } from '../db'

export const devGetS3Objects = async (): Promise<
  { id: number; file_name: string; file_path: string }[]
> => {
  return knex('exams')
    .select(['id', 'file_name', 'file_path'])
    .orderBy('file_path', 'asc')
}
