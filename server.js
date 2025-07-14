const express = require('express')
const app = express()
const cors = require('cors')
const { Collection } = require('mongodb')
const e = require('express')
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

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || PORT,()=>{
    console.log(`server is running on port `)
})