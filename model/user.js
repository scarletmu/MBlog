'use strict';
const User = require('./db/mongodb').UserModel;

exports.findById = function(username){
  return User.findOne({username:username}).exec();
};
