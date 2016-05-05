/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('../model/topic');
const Promise = require('bluebird');

exports.addTopic = function(args){
  return Topic.addTopic(args);
};

exports.editTopic = function(id,args){
  return Topic.editTopic(id,args);
};

exports.getListByCategory = function(id,page){
  let select = {Category:id};
  let limit = {sort:{CreatedTime:-1},skip:(page-1)*5,limit:5};
  return Topic.getList(select,limit)
};

exports.getList = function(page){
  let select = {},limit = {skip:(page-1)*5,limit:5,sort:{CreatedTime:-1}};
  return Topic.getList(select,limit)
};

exports.getTop = function(){
  let select = {Top:true};
  return Topic.getList(select,{});
};

exports.getDetail = function(TopicId){
  return Promise.all([
    Topic.getDetail(TopicId),
    Topic.addNum(TopicId,{ViewNum:1})
  ]).spread((detail,addResult) => {
    return detail;
  })
};


