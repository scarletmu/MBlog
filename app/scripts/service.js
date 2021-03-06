/**
 * Created by Mu on 16/2/16.
 */
angular.module('ScarletBlog')
  .service('Topic',function($http){
    this.getList = function(page){
      return $http.get('/topic/getList?page='+page);
    };
    this.getDetail = function(topicId){
      return $http.get('/topic/getDetail?topicId='+topicId);
    };
    this.getTop = function(){
      return $http.get('/topic/getTop');
    };
    this.getListByCategory = function(id,page){
      return $http.get('/topic/getListByCategory?id='+id+'&page='+page);
    };
  })
  .service('Category',function($http){
    this.getList = function(){
      return $http.get('/category/getList');
    }
  })
  .service('User',function($http){
    this.login = function(username,password){
      return $http.post('/user/login',{data:{username:username,password:password}});
    };
    this.checkLogin = function(){
      return $http.get('/user/checkLogin');
    }
  })
  .service('Admin',function($http){
    this.getToken = function(){
      return $http.get('/admin/getToken');
    };
    this.addTopic = function(args){
      return $http.post('/admin/addTopic',args);
    };
    this.addCategory = function(args){
      return $http.post('/admin/addCategory',args);
    };
    this.editTopic = function(id,args){
      return $http.post('/admin/editTopic',{id:id,args:args});
    }
  })
  .service('Comment',function($http){
    this.addComment = function(args){
      return $http.post('/comment/addComment',args);
    };
    this.getListByTopic = function(id){
      return $http.get('/comment/getListByTopic?id='+id);
    };
    this.getList = function(page){
      return $http.get('/comment/getList?page='+page);
    };
  });
