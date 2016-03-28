/**
 * Created by scarlet on 16/3/27.
 */
'use strict';
const Topic = require('../model/topic');

exports.getList = function(page){
  let select = {},limit{skip:(page-1)*20,limit:5};
  return Topic.getList(select,page);
};

exports.getTop = function(){
  let select = {isTop:true};
  return Topic.getList(select,{});
};

exports.getDetail = function(TopicId){
  return Topic.getDetail(TopicId);
}
