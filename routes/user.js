'use strict';
const router = require('express').Router();
const User = require('../modules/user');
const _ = require('lodash');

router.post('/login',function(req,res,next){
  let data = req.body['data'];
  User.login(data.username,data.password)
    .then((data) => {
      req.session = _.assign(req.session,data);
      res.status(200).end();
    }).catch((err) => {
      console.log(err);
      res.status(403).end();
    })
});

router.get('/checkLogin',function(req,res,next){
  if(req.session.username){
    res.status(200).end();
  }else{
    res.status(401).end();
  }
});

module.exports = router;
