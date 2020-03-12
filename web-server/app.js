const path = require('path')
const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
require('./mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')
const publicDirectoryPath = path.join(__dirname, '../')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(publicDirectoryPath))
app.use(userRouter)
app.use(taskRouter)


app.get('', (req, res) => {
    res.send('index')
})

app.get('/home', (req, res) => {
    console.log(req.body)
    res.sendFile(path.join(__dirname, '../home.html'))
})

let i = 3;

function portCall() {

    let countdownTimer = setInterval(function() {

        console.log(i);
        i = i - 1;

        if (i <= 0) {
            clearInterval(countdownTimer);
            app.listen(port, () => {
                console.log(chalk.whiteBright.italic.bgBlue('Underwater-Server is now running on port ' + port))
            })
        }

    }, 1000);

}

portCall(); 



