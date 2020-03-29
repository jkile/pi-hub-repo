const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const fs = require('fs')
const dirTree = require('directory-tree')
const db = require("../models");

const router = new express.Router()


router.get('/documents', async (req, res) => {
    try {

        const tree = dirTree('./documents')

        res.send(tree)

    } catch (e) {
        res.status(400).send()
        return console.log('error getting file names')
    }
})

router.get("/documents/db", (req, res) => {
    db.File.find({})
        .then(files =>{
            res.json(files);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

router.get(':filePath', async (req, res) => {
    try {
        fs.readFile(filePath, (err, fileContent) => {
            if (err) throw err
            res.send(fileContent)
        })
    } catch (e) {
        res.status(400).send()
        return console.log('router.get error')
    }
})



module.exports = router