/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Comment = require('./db/mongodb').CommentModel;

//CRUD
exports.add = function(args){
  return Comment.create(args);
};
exports.update = function(id,args){
  return Comment.update({_id:id},{$set:args});
};

exports.getList = function(page){
  let st = (page-1)*20;
  return Comment.find({},'',{skip:st,limit:20}).exec();
};

exports.getListByTopic = function(id){
  return Comment.find({topicId:id}).exec();
};