import express from 'express'
import { AuthData } from './common'
import { devGetS3Objects } from './service/dev'

const router = express.Router()

router.get('/', async (req, res) => {
  const auth = (req as any).auth as AuthData

  const objects = await devGetS3Objects()
  res.render('developer', {
    flash: req.flash(),
    username: auth.user.username,
    s3Objects: objects
  })
})

export default router
