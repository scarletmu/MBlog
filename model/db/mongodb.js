/**
 * Created by Mu on 16/3/26.
 */
'use strict';
const mongoose = require('mongoose');
const Config = require('../../config');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://' + Config.mongodb.host + '/' + Config.mongodb.db, {
  server: {
    poolSize: 50
  }
});

const TopicSchema = new mongoose.Schema({
  Title: {type: String},
  Summary: {type: String},
  Content: {type: String},
  Category: {type: mongoose.Schema.ObjectId},
  ViewNum: {type: Number,default:0},
  CommentNum:{type: Number,default:0},
  LikeNum:{type: Number,default:0},
  Draft: {type: Boolean},
  Display: {type: Boolean, default: true},
  CreatedTime:{type:Date,default:new Date()}
});

const CommentSchema = new mongoose.Schema({
  authorId:{type:mongoose.Schema.ObjectId},
  topicId:{type:mongoose.Schema.ObjectId},
  Content:{type:String},
  CreatedTime:{type:Date}
});

const CategorySchma = new mongoose.Schema({
  Name:{type:String},
  Describe:{type:String},
  Icon:{type:String},
  Photo:{type:String}
});

const UserSchema = new mongoose.Schema({
  username:{type:String},
  password:{type:String}
});

exports.TopicModel = mongoose.model('topic',TopicSchema);
exports.CommentModel = mongoose.model('comment',CommentSchema);
exports.CategoryModel = mongoose.model('category',CategorySchma,'category');
exports.UserModel = mongoose.model('user',UserSchema);
