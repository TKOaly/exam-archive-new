const proxy = require('http-proxy-middleware')

module.exports = app => {
  app.use(proxy('/api', { target: 'http://localhost:9001' }))
  app.use(proxy('/download', { target: 'http://localhost:9001' }))
}
