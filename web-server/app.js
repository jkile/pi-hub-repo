const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const User = require('../src/models/user')
require('./mongoose')
const Task = require('../src/models/task')


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
// localhost:3000/users
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e) 
    })
})

// GET request to /users. calls all users
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

// fetch individual user by DB-ID
// GET localhost:3000/users/{id}
app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
    console.log(req.params)
})



// Creates new task, requires description. will accept 'completed' bool.
// default is false
// localhost:3000/tasks
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// returns all tasks
app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})

// finds tasks by ID
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e => {
        res.status(500).send()
    }))
})


app.listen(port, () => {
    console.log('Underwater-Server is up on port ' + port)
})