const path = require('path')
const express = require('express')

const app = express()


const publicDirectoryPath = path.join(__dirname, '../')


app.use(express.static(publicDirectoryPath))




app.listen(3000, () => {
    console.log('The server started on port 3000')
}) 