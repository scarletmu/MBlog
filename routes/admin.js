'use strict';
const upyun = require('../utils/upyun');
const router = require('express').Router();
const Topic = require('../modules/topic');
const Category = require('../modules/category');

router.get('/getToken',function(req,res,next){

});

router.post('/addTopic',function(req,res,next){
  let data = req.body;
  console.log(data);
  Topic.addTopic(data).then((data) => {console.log(data);res.json(data)}).catch((err) => {console.log(err);res.status(400).end()})
});

router.post('/addCategory',function(req,res,next){
  let data = req.body;
  console.log(data);
  Category.addCategory(data).then((data) => {console.log(data);res.json(data)}).catch((err) => {console.log(err);res.status(400).end()})
});

module.exports = router;
