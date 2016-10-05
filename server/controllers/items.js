var item = require('../models/items.js')

module.exports = {
    saveItem : saveItem,
    loadItem : loadItem,
    updateItem : updateItem,
    deleteItem : deleteItem
}


function saveItem(req, res, next) {
    var newItem = item({
      itemCode : req.body.itemCode,
      name : req.body.name,
      description : req.body.description,
      price : Number(req.body.price),
      stock : Number(req.body.stock)
    })

    newItem.save(function(err) {
      if (err) throw err
      console.log('Item saved!');
      res.json(newItem)
    })
}

function loadItem(req, res, next) {
  // find all data in item collection
  item.find(function(err, result) {
    res.json(result)
  })
}

function updateItem(req, res, next) {
  item.findOne({
    _id:req.params.id
  },(err,item) => {
      item.itemCode = req.body.itemCode
      item.name = req.body.name
      item.description = req.body.description
      item.price = req.body.price
      item.stock = req.body.stock

      item.save((err)=> {
        if(err) throw err
        res.json(item)
      })
  })
}


function deleteItem(req, res, next) {
  item.remove({
    _id : req.params.id
  }, (err, items) => {
      res.json({"message" : "Item deleted"})
  })
}
