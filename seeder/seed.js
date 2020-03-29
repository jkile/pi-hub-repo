const mongoose = require("mongoose");
const db = require("../src/models");
const dirTree = require("directory-tree");

mongoose.connect('mongodb://127.0.0.1:27017/underwater-squad-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const tree = dirTree("./documents");
const dbValues = [];

function parseTree(tree) {
    if (tree.children) {
        tree.children.forEach(item => {
            if (item.type === "file") {
                let file = new db.File({ fileName: item.name, filePath: item.path });
                db.File.create(file)
                    .then(() => {
                        console.log("Record added successfully");
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                parseTree(item);
            }

        });
    }
}

parseTree(tree);
setTimeout(() => {
    process.exit();
}, 2000)