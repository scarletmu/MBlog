/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const router = require('express').Router();
const Topic = require('../modules/topic');

router.get('/getList',function(req,res,next){
  Topic.getList(req.query['page']).then((data) => (res.json(data))).catch((err)=>{console.log(err);res.status(400).end();});
});

router.get('/getTop',function(req,res,next){
  Topic.getTop().then((data) => {res.json(data)}).catch((err) => {res.status(400).end()});
});

router.get('/getDetail',function(req,res,next){
  Topic.getDetail(req.query['topicId']).then((data) => {res.json(data)}).catch((err) => {console.log(err);res.status(400).end()})
});

router.get('/getListByCategory',function(req,res,next){
  Topic.getListByCategory(req.query['id'],req.query['page']).then((data) => {res.json(data)}).catch((err) => {console.log(err);res.status(400).end()})
});

module.exports  = router;
