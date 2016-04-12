/**
 * Created by scarlet on 16/4/11.
 */
'use strict';
const Comment = require('../model/comment');

exports.add = function(args){
  return Comment.add(args);
};

exports.getListByTopic = function(id){
  return Comment.getListByTopic(id);
};

exports.getList = function(page){
  return Comment.getList(page);
};