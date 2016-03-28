'use strict';
const User = require('./db/mongodb').UserModel;

exports.getUser = function(username){
  return User.find({username:username}).exec();
};
