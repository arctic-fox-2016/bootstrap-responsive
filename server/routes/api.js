const express = require('express'),
      router = express.Router(),
      itemsController = require('../controllers/items')

module.exports = router

router.post('/items', itemsController.saveItem)
router.get('/items', itemsController.loadItem)
router.delete('/items/:id', itemsController.deleteItem)
router.put('/items/:id', itemsController.updateItem)
