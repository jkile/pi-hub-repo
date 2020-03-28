const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({

    fileName: {
        type: String,
        required: true,
        trim: true
    },
    fileContent: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})

const File = mongoose.model("File", fileSchema);

module.exports = File;