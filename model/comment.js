/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Comment = require('./db/mongodb').CommentModel;

exports.add = function(args){
  return Comment.create(args);
};