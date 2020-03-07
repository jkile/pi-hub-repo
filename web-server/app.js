const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
require('./mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')
const publicDirectoryPath = path.join(__dirname, '../')


const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method ==='GET') {
//         res.send('GET requests disabled.')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site Under Construction')
// })


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
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



const jwt = require('jsonwebtoken')


const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'secretkeeper', { expiresIn: '24 hours'})
    console.log(token)

    const data = jwt.verify(token, 'secretkeeper')
    console.log(data)
} 
myFunction()