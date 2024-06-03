import { dbPool } from '@lib/db'
import { AdminS3Object } from '@lib/types'

export const adminGetS3Objects = async (): Promise<AdminS3Object[]> => {
  const result = await dbPool.query(`
    SELECT
      e.id, e.mime_type, e.file_name, e.file_path
    FROM exams e
    ORDER BY e.file_path ASC
  `)
  const objects = result.rows.map(row => AdminS3Object.parse(row))
  return objects
}

export const parseObjectKey = (filePath: string) => {
  const parts = filePath.split('/')
  return parts.length > 1
    ? {
        prefix: parts[0],
        object: parts[1]
      }
    : {
        prefix: '',
        object: filePath
      }
}

export const sortByPrefixThenObjNameAsc = (
  aObj: AdminS3Object,
  bObj: AdminS3Object
) => {
  const a = parseObjectKey(aObj.filePath)
  const b = parseObjectKey(bObj.filePath)
  const byPrefix = a.prefix.localeCompare(b.prefix)
  return byPrefix === 0 ? a.object.localeCompare(b.object) : byPrefix
}
