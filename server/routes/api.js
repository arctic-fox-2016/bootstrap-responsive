const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items')


router.post('/items', itemsController.insert)
router.get('/items', itemsController.display)
router.put('/items/:id', itemsController.update)
router.delete('/items/:id', itemsController.hapus)


module.exports = router
