const express = require("express");
const fs = require("fs");
const dirTree = require("directory-tree");
const db = require("../models");


const router = new express.Router();

router.post("/api/git/init/:name", (req, res) => {
    try {

        if (!fs.existsSync(`ubuntu@192.168.7.6:/home/ubuntu/Server/git/${req.params.name}.git`)){

            const simpleGit = require('simple-git')(`../../testRepos/${req.params.name}`);

            simpleGit.init("bare")
                .addRemote("origin", `ubuntu@192.168.7.6:/home/ubuntu/Server/git/${req.params.name}.git`)


                res.send(`ubuntu@192.168.7.6:/home/ubuntu/Server/git/${req.params.name}.git`);
        } else {
            res.send("Repository name taken, please try another name")
        }

    } catch (e) {
        res.send(e);
    }
})


module.exports = router;