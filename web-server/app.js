const path = require('path')
const express = require('express')
const basicAuth = require('express-basic-auth')

const app = express()


const publicDirectoryPath = path.join(__dirname, '../')

// todo - enable home.html

app.use(express.static(publicDirectoryPath))

app.use(basicAuth({
    users: {
        'admin': 'password',
        'spencer': 'spencer',
        'jake': 'jake',
    }
}))



app.listen(3000, () => {
    console.log('The server started on port 3000')
}) 