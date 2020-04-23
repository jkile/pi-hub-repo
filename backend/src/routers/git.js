const express = require("express");
const fs = require("fs");
const dirTree = require("directory-tree");
const db = require("../models");


const router = new express.Router();

router.post("/api/git/init/:name", (req, res) => {
    try {

        if (!fs.existsSync(`../../git/${req.params.name}`)){

            fs.mkdirSync(`../../git/${req.params.name}`)
            

            const simpleGit = require('simple-git')(`../../git/${req.params.name}`);

            simpleGit.init("bare")
                // .addRemote("origin", `ubuntu@192.168.7.6:/home/ubuntu/Server/git/${req.params.name}.git`)


                res.send(`ubuntu@192.168.7.6:/home/ubuntu/Server/git/${req.params.name}`);
        } else {
            res.send("Repository name taken, please try another name")
        }

    } catch (e) {
        res.send("did not work");
    }
})


module.exports = router;