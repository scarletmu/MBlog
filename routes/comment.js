/**
 * Created by scarlet on 16/4/11.
 */
'use strict';
const Comment = require('../modules/comment');
const router = require('express').Router();

router.post('/addComment',function(req,res,next){
  Comment.add(req.body).then((data) => {res.json(data);}).catch((err) => {console.log(err);res.status(400).end();})
});

router.get('/getListByTopic',function(req,res,next){
  Comment.getListByTopic(req.query['id']).then((data) => {res.json(data);}).catch((err) => {console.log(err);res.status(400).end();})
});

router.get('/getList',function(req,res,next){
  Comment.getList(req.query['page']).then((data) => {res.json(data);}).catch((err) => {console.log(err);res.status(400).end();})
});

module.exports = router;