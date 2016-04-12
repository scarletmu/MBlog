'use strict';
const upyun = require('../utils/upyun');
const router = require('express').Router();
const Topic = require('../modules/topic');
const Category = require('../modules/category');

router.use(function (req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.status(403).end();
  }
});

router.get('/getToken',function(req,res,next){
  upyun.getToken('/blog/{filemd5}{.suffix}').then((data) => {res.json(data)}).catch((err) => {console.log(err);res.status(400).end()})
});

router.post('/addTopic',function(req,res,next){
  let data = req.body;
  Topic.addTopic(data).then((data) => {console.log(data);res.json(data)}).catch((err) => {console.log(err);res.status(400).end()})
});

router.post('/editTopic',function(req,res,next){
  let data = req.body;
  console.log(data);
  Topic.editTopic(data.id,data.args).then((data) => {console.log(data);res.json(data)}).catch((err) => {console.log(err);res.status(400).end()})
});

router.post('/addCategory',function(req,res,next){
  let data = req.body;
  console.log(data);
  Category.addCategory(data).then((data) => {console.log(data);res.json(data)}).catch((err) => {console.log(err);res.status(400).end()})
});

module.exports = router;
