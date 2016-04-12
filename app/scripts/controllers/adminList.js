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
    $scope.EditTopic = function(id){
      sessionStorage.setItem('editTag',id);
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
  })
  .controller('CommentListCtrl',function($scope,Comment){
    $scope.page = 1;
    Comment.getList($scope.page).then(function(data){
      $scope.commentList = data.data;
    });
  });
