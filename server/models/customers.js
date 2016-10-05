var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var customerSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    memberId : String,
    addres: String,
    zipcode: String,
    phone: String
});

module.exports= mongoose.model('customers', customerSchema)
