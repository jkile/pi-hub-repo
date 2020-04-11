const express = require("express");
const fs = require("fs");
const dirTree = require("directory-tree");
const db = require("../models");


const router = new express.Router();

router.post("/api/git/init/:name", (req, res) => {
    try {

        if (!fs.existsSync(`../../testRepos/${req.params.name}`)){
            fs.mkdirSync(`../../testRepos/${req.params.name}`);
            fs.mkdirSync(`../../testClone/${req.params.name}`);
            const simpleGit = require('simple-git')(`../../testRepos/${req.params.name}`);

            simpleGit.init("bare")
                .add("./*")
                .commit("Init")
                .addRemote("origin", `../testRepos/${req.params.name}/.git`)
                .push("origin", "master");

                res.send(`../testRepos/${req.params.name}/.git`);
        } else {
            res.send("Repository name taken, please try another name")
        }

    } catch (e) {
        res.send(e);
    }
})


module.exports = router;