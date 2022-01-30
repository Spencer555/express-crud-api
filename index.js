const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//parse requests of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//parse requests of content-type -application/json
app.use(bodyParser.json())


//config database 
const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise 

//connecting to database 
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to database')
}).catch(err => {
    console.log('Could not connect to database. Exiting now...', err)
    process.exit()
})

app.get('/', (req, res) => {
    res.json({"message":"Welcome to notes application"})
})



// require('./app/routes/note.route.js')(app)
app.use('/', require('./app/routes/note.route.js'))

//listen for requests
app.listen(3000, ()=> {
    console.log('Server is listening on port 3000')
})