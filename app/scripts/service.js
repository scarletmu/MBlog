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
    this.addTopic = function(data){
      return $http.post('/topic/addTopic',{data:data})
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
  });
