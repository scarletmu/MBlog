/**
 * Created by Mu on 16/4/9.
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
  })
  .controller('CategoryListCtrl',function($scope,$state,$mdDialog,Category){
    Category.getList().then(function(data){
      $scope.categoryList = data.data;
    });
    $scope.addNewCategory = function(){
      $mdDialog.show({
        templateUrl:'../../views/admin/newCategory.html',
        fullscreen:true
      })
    };
  });
