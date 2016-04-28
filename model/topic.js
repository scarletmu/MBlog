/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('./db/mongodb').TopicModel;
const ObjectId = require('mongoose').Schema.ObjectId;

Date.prototype.toLocaleString = function () {
  return this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日 " + this.getHours() + "点" + this.getMinutes() + "分" + this.getSeconds() + "秒";
};

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


