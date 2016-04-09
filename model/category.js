/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Category = require('./db/mongodb').CategoryModel;

//CRUD
exports.add = function(args){
  return Category.create(args);
};
exports.update = function(id,args){
  return Category.update({_id:id},{$set:args})
};

exports.getList = function(){
  return Category.find().exec();
};

exports.getSingle = function(id){
  return Category.find({_id:id}).exec();
};
