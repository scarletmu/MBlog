/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('../model/topic');

exports.getList = function(page){
  let select = {},limit = {skip:(page-1)*20,limit:5};
  return Topic.getList(select,limit);
};

exports.editTopic = function(id,args){
  return Topic.editTopic(id,args);
};

exports.getListByCategory = function(id){
  let select = {Category:id};
  return Topic.getList(select,{})
};

exports.getTop = function(){
  let select = {isTop:true};
  return Topic.getList(select,{});
};

exports.getDetail = function(TopicId){
  return Topic.getDetail(TopicId);
};

exports.addTopic = function(args){
  return Topic.addTopic(args);
};
