const path = require('path')
const express = require('express')
const basicAuth = require('basic-Auth')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({extended:true}))


const publicDirectoryPath = path.join(__dirname, '../')

// todo - enable home.html

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('index')
})

app.post('/home', (req, res) => {
    console.log(req.body)
    res.sendFile(path.join(__dirname, '../home.html'))
})




app.listen(3000, () => {
    console.log('The server started on port 3000')
}) 