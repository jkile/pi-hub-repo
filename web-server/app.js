const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
require('./mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')


const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
const publicDirectoryPath = path.join(__dirname, '../')
app.use(express.static(publicDirectoryPath))
app.use(userRouter)
app.use(taskRouter)


app.get('', (req, res) => {
    res.send('index')
})

app.post('/home', (req, res) => {
    console.log(req.body)
    res.sendFile(path.join(__dirname, '../home.html'))
})

app.listen(port, () => {
    console.log('Underwater-Server is up on port ' + port)
})