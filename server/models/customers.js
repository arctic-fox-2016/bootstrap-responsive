var mongoose = require('mongoose')
var Schema = mongoose.Schema

var customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  memberId: {
    type: String,
    required: true
  },
  address: String,
  zipcode: String,
  phone: String
})

var customers = mongoose.model('customers', customerSchema)
module.exports customers
