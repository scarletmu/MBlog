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
    }
  });
