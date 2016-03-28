/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('./db/mongodb').TopicModel;
const Comment = require('./db/mongodb').CommentModel;
const Category = require('./db/mongodb').CategoryModel;

exports.getTopicList = function(page){
  let st = (page-1)*20;
  return Topic.find({},'',{skip:,limit:5});
}

exports.getCommentList = function(page){

};

exports.getCommentListByTopic = function(){

};

exports.getCategoryList = function(){

};

exports.addTopic = function(args){

};

exports.addCategory = function(){

};

exports.updateTopic = function(args){

};

exports.updateCategory = function(){

};

exports.deleteTopic = function(){

};

exports.deleteCategory = function(){

};

exports.deleteComment = function(){
  
}
