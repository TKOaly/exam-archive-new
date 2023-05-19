import type { NextApiRequest, NextApiResponse } from 'next'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import contentDisposition from 'content-disposition'
import { randomUUID as uuidv4 } from 'crypto'
import { transliterate } from 'transliteration'
import { createReadStream } from 'node:fs'

import formidable from 'formidable'

import { getCourseInfo, createExam } from '@services/archive'
import { validateRights } from '@services/tkoUserService'
import s3 from '@services/s3'
import configs from '@lib/config'
import { getLegacyApiSession } from '@lib/sessions'

export const config = {
  api: {
    bodyParser: false
  }
}

const parseFile = (
  req: NextApiRequest
): Promise<{ file: formidable.File; courseId: number }> => {
  return new Promise(async (resolve, reject) => {
    const form = formidable({
      keepExtensions: true,
      multiples: false
    })

    form.parse(req, (err, fields, files) => {
      if (err) reject(err)

      const file = files.file as formidable.File[]
      const courseId = parseInt(fields.courseId[0], 10)

      if (!file[0]) reject(new Error('No file found'))
      if (isNaN(courseId))
        reject(
          new Error('Cannot upload a file to a course that does not exist.')
        )

      resolve({ file: file[0], courseId })
    })
  })
}

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const session = await getLegacyApiSession(req)
      if (!session) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }
      const isRights = validateRights(session.rights, 'upload')
      if (!isRights) {
        return res.status(401).json({ error: '401 Unauthorized' })
      }

      const { file, courseId } = await parseFile(req)

      const course = await getCourseInfo(courseId)
      if (course === null) {
        return res.status(404).json({
          error: 'Cannot upload a file to a course that does not exist.'
        })
      }

      const originalFilename = file.originalFilename as string
      const contentType = file.mimetype as string
      const filepath = file.filepath as string

      const params = {
        Bucket: configs.AWS_S3_BUCKET_ID,
        Key: uuidv4(),
        ContentDisposition: contentDisposition(originalFilename, {
          type: 'inline',
          fallback: transliterate(originalFilename)
        }),
        ContentType: contentType,
        ACL: 'private',
        Body: createReadStream(filepath)
      }

      await s3.send(new PutObjectCommand(params))

      const exam = await createExam({
        courseId: course.id,
        fileName: originalFilename,
        filePath: params.Key,
        mimeType: contentType
      })

      // req.flash(`Exam ${file.originalname} created!`, 'info')
      res.json(exam)
    } catch (error) {
      console.log('Error uploading exam:', error)
      return res.status(500).json({ error: '500 Internal Server Error' })
    }
  } else {
    res.status(405).send({ error: 'unvalid method' })
  }
}

const handler = upload

export default handler
