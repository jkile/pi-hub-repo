const path = require("path");
const chokidar = require("chokidar");
const fs = require("fs");

// watches directory for changes and outputs file paths
// todo: adjust so only root level repo is logged and not every recursive dir. 
const gitPath = "/home/ubuntu/Server/git/";
let watcher = chokidar.watch(gitPath, {
  ignoreInitial: true,
  persistent: true,
  usePolling: true,
  interval: 300,
  binaryInterval: 300,
  depth: 1,
  awaitWriteFinish: {
    stabilityThreshold: 300,
    pollInterval: 300,
  },
});
watcher.on("addDir", function (path) {
  console.log("File", path, "has been added");
  fs.copyFile('/home/ubuntu/Server/git/hooks/*', path + '/', (err) => {
    if (err) throw err;
    console.log('hooks copied successfully');
  });
  
});


