/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('./db/mongodb').TopicModel;

exports.addTopic = function(args){
  return Topic.create(args);
};

exports.addNum = function(id,args){
  return Topic.update({_id:id},{$inc:args})
};

exports.editTopic = function(id,args){
  return Topic.update({_id:id},{$set:args});
};

exports.getList = function(select,page){
  return Topic.find(select,'',page);
};

exports.getDetail = function(TopicId){
  return Topic.findById(TopicId).exec();
};


