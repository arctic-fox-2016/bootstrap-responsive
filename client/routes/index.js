const express = require('express')
const router = express.Router()



router.get('/', function(req,res,next){
  res.render('master')
})

router.get('/items', function(req,res,next){
  res.render('item')
})

module.exports = router
