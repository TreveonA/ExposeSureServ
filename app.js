require('dotenv').config()

var express = require('express');
var app = express()
// var test = require('./controllers/testcontrollers')
var user = require('./controllers/usercontroller')
var sequelize = require('./db')
var bodyParser = require('body-parser')
var login = require('./controllers/logincontroller')
var adlog = require('./controllers/adlogcontroller')
var tablelog = require('./controllers/tablelogcontroller')
var sponslog = require('./controllers/sponslogcontroller')

sequelize.sync()
//comment to change things
app.use(bodyParser.json())

app.use(require('./middleware/headers'))

// app.use('/test', test)

app.use('/api/user', user)
app.use('/api/login', login)

app.use(require('./middleware/validate-session'))

app.use('/api/adlog', adlog)
app.use('/api/tablelog', tablelog)
app.use('/api/sponslog', sponslog)



//could be written as follows also
//app.use('/api/user', require('./controllers/usercontroller'))

app.listen(process.env.PORT, function (){
    console.log(`Server is working on ${process.env.PORT}`)
})

// app.use('/api/test', function(req, res){
//     res.send("This is data from the /api/test endpoint. It's from the server")
// })