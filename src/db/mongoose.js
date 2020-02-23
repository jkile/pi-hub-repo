const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/underwater-squad-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be above 0')
            }
        }
    }
})

const user1 = new User({
    name: 'Spencer',
    email: 'spencer@'
})

user1.save().then(() => {
    console.log(user1)
}).catch((error) => {
    console.log('error', error)
})


const Task = mongoose.model('Task', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})

// const task = new Task({
//     description: 'Upload new files',
//     completed: false
// })


// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })