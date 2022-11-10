const chokidar = require('chokidar')
const fs = require('fs/promises')
const path = require('path')

const watchDir = path.join(__dirname, '..', 'src', 'views')
const destinationDir = path.join(__dirname, '..', 'dist', 'views')
const watcher = chokidar.watch(watchDir, {
  ignored: /^\./,
  persistent: true,
  cwd: watchDir
})

watcher
  .on('add', async path => {
    console.log('File', path, 'has been added')
    await fs.cp(`${watchDir}/${path}`, `${destinationDir}/${path}`)
  })
  .on('change', async path => {
    console.log('File', path, 'has been changed')
    await fs.cp(`${watchDir}/${path}`, `${destinationDir}/${path}`)
  })
  .on('unlink', async path => {
    console.log('File', path, 'has been removed')
    await fs.rm(`${destinationDir}/${path}`)
  })
  .on('error', error => {
    console.error('Error happened', error)
  })
