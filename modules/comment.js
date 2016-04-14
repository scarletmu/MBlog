/**
 * Created by scarlet on 16/4/11.
 */
'use strict';
const Comment = require('../model/comment');
const Topic = require('../model/topic');
const Promise = require('bluebird');

exports.add = function(args){
  return Promise.all([
    Comment.add(args),
    Topic.addNum(args.topicId,{CommentNum:1})
  ]).spread((add,num) => {
    return add;
  })
};

exports.getListByTopic = function(id){
  return Comment.getListByTopic(id);
};

exports.getList = function(page){
  return Comment.getList(page);
};