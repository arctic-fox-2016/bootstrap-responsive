var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a Schema
var itemSchema = new Schema({
    itemCode: {
        type: String
    },
    name: {
        type: String
    },
    description: String,
    price: Number,
    stock: Number
})

var items = mongoose.model('items', itemSchema)
module.exports = items

/*
item_code
name
description
price
stock
*/
