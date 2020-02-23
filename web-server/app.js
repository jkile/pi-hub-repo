const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const User = require('./models/user')
require('./db/mongoose')


const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

const publicDirectoryPath = path.join(__dirname, '../')


app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('index')
})

app.post('/home', (req, res) => {
    console.log(req.body)
    res.sendFile(path.join(__dirname, '../home.html'))
})


// Creates new user - JSON POST: name, email, password
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e) 
    })
})

app.listen(port, () => {
    console.log('Underwater-Server is up on port ' + port)
})