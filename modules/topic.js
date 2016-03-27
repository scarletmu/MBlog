/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('../model/topic');

exports.getList = function(page){
  return Topic.getList(page);
};

