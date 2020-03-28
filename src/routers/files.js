const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const files = require('../models/files')
const fs = require('fs')
const router = new express.Router()







router.get('/documents', async (req, res) => {
    try {
        fs.readdir('./documents', (err, files) => {
            if (err) throw err
            const fileNames = [] 
            files.forEach(file => {
                fileNames.push(file)
                
            })
            res.send(fileNames)
        })

    } catch (e) {
        res.status(400).send()
        return console.log('error getting file names')
    }
})

module.exports = router