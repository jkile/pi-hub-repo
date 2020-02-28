const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// local mongodb instance w/ default port
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'underwater-squad'

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Underwater-Squad')
    }

    // declaring the db with .db will create it for us
    const db = client.db(databaseName)


    
    
})