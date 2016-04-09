'use strict';
const User = require('../model/user');
const crypto = require('crypto');
const Promise = require('bluebird');

exports.login = function(username,password){
  return User.findById(username).then((userInfo) => {
    if(userInfo){
      if(userInfo.password == md5(password)){
        userInfo = userInfo.toObject();
        delete userInfo.password;
        return userInfo;
      }else{
        return Promise.reject('Wrong Password');
      }
    }else{
      return Promise.reject('No Such User');
    }
  });
};

function md5(str) {
  var md5 = crypto.createHash('md5');
  return md5.update(str).digest('hex');
}
