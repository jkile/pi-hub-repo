const path = require('path')
const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
require('./mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')
const filesRouter = require('../src/routers/files')
const gitRouter = require('../src/routers/git')
 const publicDirectoryPath = path.join(__dirname, '../../client/build')


const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(publicDirectoryPath))
app.use(userRouter)
app.use(taskRouter)
app.use(filesRouter)
app.use(gitRouter)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})


app.listen(port, () => {
    console.log(chalk.whiteBright.italic.bgBlue('Underwater-Server is now running on port ' + port))
})

// 
