'use strict';
const Category = require('../model/category');

exports.getList = function(){
  return Category.getList();
}
