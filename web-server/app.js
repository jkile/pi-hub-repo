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
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// GET request to /users. calls all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

// fetch individual user by DB-ID
// GET localhost:3000/users/{id}
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(__id)
        
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)

    } catch (e) {
        res.status(500).send()
    }
})

// this updates users files
app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// user delete call to their ID. No parameters needed. 
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})


// Creates new task, requires description. will accept 'completed' bool.
// default is false
// localhost:3000/tasks
app.post('/tasks', async (req, res) => {
    try {
        await task.save()
        res.status(201)
    } catch (e) {
        res.status(400).send(e)
    }
})

// returns all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

// finds tasks by ID
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
 try {
        const task = await Task.findById()
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})


app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(404).send({ error: 'Invalid Updates'})
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        
        if (!task) {
            return res.status(404).send() 
        } 
        res.send(task)
    } catch (e) {
        res.status(400).send()
    }
})
// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

app.listen(port, () => {
    console.log('Underwater-Server is up on port ' + port)
})