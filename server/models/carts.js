var mongoose = require('mongoose')
var Schema = mongoose.Schema

var cartSchema = new Schema({
  customerId : {
    type: Schema.Types.ObejctId,
    ref: 'customers'
  },
  total: Number,
  transaction_date: Date,
  itemList: [{
    code : {
      type: Schema.Types.ObjectId,
      ref: 'items'
    },
    qty: Number
  }]
})

var carts = mongoose.model('carts', cartSchema)
module.exports = cart
