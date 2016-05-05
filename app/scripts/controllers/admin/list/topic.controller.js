/**
 * Created by scarlet on 16/5/5.
 */
angular.module('ScarletBlog')
  .controller('TopicListCtrl',function($scope,$state,$mdDialog,Topic){
    Topic.getList().then(function(data){
      $scope.topicList = data.data;
    });
    $scope.addNewTopic = function(){
      $mdDialog.show({
        templateUrl:'../../views/admin/newTopic.html',
        fullscreen:true
      })
    };
    $scope.EditTopic = function(id){
      sessionStorage.setItem('editTag',id);
      $mdDialog.show({
        templateUrl:'../../views/admin/newTopic.html',
        fullscreen:true
      })
    };
  });
