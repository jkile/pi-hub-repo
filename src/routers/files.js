const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const files = require('../models/files')
const fs = require('fs')
const dirTree = require('directory-tree')

const router = new express.Router()


router.get('/documents', async (req, res) => {
    try {
        // fs.readdir('./documents', (err, files) => {
        //     if (err) throw err
        //     const fileNames = [] 
        //     files.forEach(file => {
        //         fileNames.push(file)
                
        //     })
        //     res.send(fileNames)
        // })
        const tree = dirTree('./documents')

        res.send(tree)

    } catch (e) {
        res.status(400).send()
        return console.log('error getting file names')
    }
})


router.get('/documents/:fileName', async (req, res) => {
    try {
        fs.readFile('/documents' + fileName, (err, fileContent) => {
            if (err) throw err
            res.send(fileContent)
        })
    } catch (e) {
        res.status(400).send()
        return console.log('router.get error')
    }
})



module.exports = router