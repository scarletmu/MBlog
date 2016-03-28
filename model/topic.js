/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('./db/mongodb').TopicModel;
const ObjectId = require('mongoose').Schema.ObjectId;

exports.addTopic = function(args){
  return Topic.create(args);
};

exports.getList = function(select,page){
  return Topic.find(select,'',page);
};

exports.getDetail = function(TopicId){
  console.log(TopicId);
  return Topic.findById(TopicId).exec();
};
