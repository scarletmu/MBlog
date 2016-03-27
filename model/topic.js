/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('./db/mongodb').TopicModel;

exports.add = function(args){
  return Topic.create(args);
};

exports.getList = function(page){
  let st = (page-1)*5;
  return Topic.find({},'',{skip:st,limit:5})
};