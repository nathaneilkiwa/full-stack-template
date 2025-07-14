const express = require('express')
const app = express()
const cors = require('cors')
const { Collection } = require('mongodb')
const MongoClient =  require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_SRING,
    dbName = 'project_new',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to Database`)
        db = client.db(dbName)
        collection = db.collection('movies')
    })

app.listen(process.env.PORT || PORT,()=>{
    console.log(`server is running on port `)
})