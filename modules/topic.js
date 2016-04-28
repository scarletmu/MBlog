/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('../model/topic');
const Promise = require('bluebird');

exports.getList = function(page){
  let select = {},limit = {skip:(page-1)*5,limit:5,sort:{CreatedTime:-1}};
  return Topic.getList(select,limit)
    .then(function(data){
    let result = data.map(function(e){
      e = e.toJSON();
      e.CreatedTime = new Date(e.CreatedTime).toLocaleString();
      return e;
    });
    return result;
  });
};

exports.editTopic = function(id,args){
  return Topic.editTopic(id,args);
};

exports.getListByCategory = function(id){
  let select = {Category:id};
  return Topic.getList(select,{})
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

exports.addTopic = function(args){
  return Topic.addTopic(args);
};
