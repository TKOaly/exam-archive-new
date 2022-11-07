/// <reference path="./types/types.d.ts"/>
import express, { Request, Response } from 'express'
import session from 'express-session'
import morgan from 'morgan'
import path from 'path'
const MemoryStore = require('memorystore')(session)
import cookieParser from 'cookie-parser'
import compression from 'compression'
import axios from 'axios'

import config from './config'
import * as db from './db'
import apiRouter from './api'
import downloadRouter from './download'
import controller from './controller'
import {
  getUserServiceLoginUrl,
  getUserServiceLogoutUrl,
  getMe,
  UserMembership,
  UserRole
} from './service/tkoUserService'
import { isActiveMember, AuthData, roleRights, requireRights } from './common'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.set('trust proxy', config.TRUST_PROXY_IPS)

// gzip response since ALB doesn't do compression.
// Uses the `compressible` package to determine whether to compress, by default
// checks mime-db and falls back to checking content type - compresses:
// `text/*`, `*/*+json`, `*/*+text`, `*/*+xml`
app.use(compression())

app.get('/healthcheck', (req: Request, res: Response) =>
  res.send(
    `
<!DOCTYPE html>
<html>
<head><title>healthcheck</title></head>
<body>
<h1>healthcheck</h1>
<p>db status: <span id="dbstatus"></span><button id="btn">test</button></p>
<script>
const outputEl = document.getElementById('dbstatus')
const loading = () => {
  outputEl.style = "color: initial"
  outputEl.innerText = "loading..."
}
const succ = () => {
  outputEl.style = "color: green;"
  outputEl.innerText = "success"
}
const fail = () => {
  outputEl.style = "color: red;"
  outputEl.innerText = "fail"
}

document.getElementById('btn').addEventListener('click', () => {
  loading()
  fetch('/healthcheck/db')
    .then(res => {
      if (res.status === 200) {
        succ()
      } else {
        fail()
      }
    })
    .catch(e => {
      console.error(e)
      fail()
    })
})

</script>
</body>
</html>
`
  )
)
app.get('/healthcheck/db', async (req: Request, res: Response) => {
  try {
    await db.testConnection()
    return res.sendStatus(200)
  } catch (e) {
    console.error(`DB healthcheck failed`, e)
    return res.sendStatus(500)
  }
})

const robots = `User-agent: *
Disallow: /
`
app.get('/robots.txt', (req: Request, res: Response) => res.send(robots))

app.use(cookieParser())
app.use(morgan(config.NODE_ENV === 'development' ? 'dev' : 'combined'))

app.use(
  session({
    cookie: {
      maxAge: 86400000,
      httpOnly: true,
      sameSite: 'strict'
    },
    // TODO: persistent storage
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: config.COOKIE_SECRET,
    // don't need resave because memorystore implements touch
    resave: false,
    saveUninitialized: false
  })
)

app.use((req: Request, res: Response, next) => {
  req.flash = (msg?: string, type?: 'error' | 'info') => {
    if (!msg && !type) {
      const ret = req.session!['__flash']
      req.session!['__flash'] = undefined
      return ret
    }
    if (msg && type) {
      req.session!['__flash'] = { msg, type }
    }
  }

  next()
})

const staticMiddleware = express.static(path.join(__dirname, '../static'))
app.use('/favicon.ico', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../static/favicon.ico'))
})
app.use('/static', staticMiddleware)

app.use(async (req: Request, res: Response, next) => {
  if (config.NODE_ENV === 'development') {
    const mockUser = {
      username: 'dev-user',
      role: UserRole.Yllapitaja,
      membership: UserMembership.Jasen
    }

    ;(req as any).auth = {
      user: mockUser,
      rights: isActiveMember(mockUser) ? roleRights[mockUser.role] || {} : {}
    }

    return next()
  }

  const token = req.cookies.token as string | undefined

  if (!token) {
    const url = getUserServiceLoginUrl()
    return res.redirect(url)
  }

  try {
    const me = await getMe(token)
    if (!me.ok) {
      // TODO: 500 page
      console.error(`user service returned non-ok response`, me)
      return res.status(500).render('error-user-service')
    }

    const user = me.payload
    const noRights = {}
    ;(req as any).auth = {
      user,
      rights: isActiveMember(user)
        ? roleRights[user.role] || noRights
        : noRights
    } as AuthData
  } catch (e) {
    if (!axios.isAxiosError(e)) {
      console.error('user-service getMe failed with error is not AxiosError', e)
      return res.status(500).render('error-user-service')
    }
    if (!e.response) {
      console.error('user-service getMe failed with no response', e)
      return res.status(500).render('error-user-service')
    }

    const status = e.response.status
    if (status >= 400 && status < 500) {
      // logged in to another service with current token, show login page again
      // so we get consent to this service as well
      const url = getUserServiceLoginUrl()
      return res.redirect(url)
    }

    // user service down?
    console.error('user-service /users/me failed', e, {
      status,
      data: e.response.data
    })
    return res.status(500).render('error-user-service')
  }

  next()
})

app.use('/logout', (req: Request, res: Response) => {
  if (!req.cookies.token) {
    return res.redirect('/')
  }
  return res.redirect(getUserServiceLogoutUrl())
})

app.use('/', requireRights('access'), controller)

app.use('/api', requireRights('access'), apiRouter)
app.use('/download', requireRights('access'), downloadRouter)

app.use('*', (req: Request, res: Response) => {
  const auth = (req as any).auth as AuthData | undefined

  res.status(404).render('404', {
    flash: req.flash(),
    username: auth && auth.user && auth.user.username
  })
})

app.listen(config.PORT, () => {
  console.log(`Server running → http://localhost:${config.PORT}/`)
})
