/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Category = require('./db/mongodb').CategoryModel;

exports.add = function(args){
  return Category.create(args);
};

exports.getList = function(){
  return Category.find().exec);
};
