const mongoose = require('mongoose')

// connects to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/underwater-squad-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})
