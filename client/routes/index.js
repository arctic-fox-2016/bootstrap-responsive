const express = require('express'),
      router = express.Router()

module.exports = router

router.get('/', function(req, res, next) {
  res.render('pages/home')
})

router.get('/items', function(req, res, next){
  res.render('pages/items')
})
