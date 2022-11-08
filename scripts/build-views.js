const chokidar = require('chokidar');
const fs = require('fs/promises')
const path = require('path')

const buildDir = path.join(__dirname, "..", "src", "views")
const destinationDir = path.join(__dirname, "..", "dist", "views")

const getFileList = async (dir) => {
    let files = []
    const items = await fs.readdir(dir, { withFileTypes: true })

    for (const item of items) {
        if (item.isDirectory()) {
            const filesFromDir = await getFileList(`${dir}/${item.name}`)
            files = [...files, ...filesFromDir]
        } else {
            files = [...files, `${dir}/${item.name}`]
        }
    }

    return files
}

const copyFiles = async () => {
    const files = await getFileList(buildDir)
    files.forEach(async (file) => {
        console.log(`Copying ${file.replace(buildDir, "")} to dist/views`)
        await fs.cp(file, `${destinationDir}/${file.replace(buildDir, "")}`)
    })
}

copyFiles()