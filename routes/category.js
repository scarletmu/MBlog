'use strict';
const router = require('express').Router();
const Category = require('../modules/category');

router.get('/getList',function(req,res,next){
  Category.getList().then((data) => {res.json(data);}).catch((err) => {console.log(err);res.status(400).end();})
});

module.exports = router;
