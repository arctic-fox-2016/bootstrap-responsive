const express = require('express');
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shopping-cart');

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', require('./routes/api'))

app.listen(port)
console.log('Server is on port : ' + port)
