/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('./db/mongodb').TopicModel;

exports.add = function(args){
  return Topic.create(args);
};

exports.getList = function(select,page){
  return Topic.find(select,'',page);
};

exports.getDetail = function(TopicId){
  return Topic.find({_id:TopicId}).exec();
}
