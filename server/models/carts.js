var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var cartSchema = mongoose.Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'customers'
  },
  total: String,
  transactionDate: String,
  itemList: [{
    itemcode: {
      type:Schema.Types.ObjectId,
      ref:'items'
    },qty:Number
  }]
});

module.exports= mongoose.model('carts', cartSchema)
