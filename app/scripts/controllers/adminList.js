/**
 * Created by Mu on 16/4/9.
 */
angular.module('ScarletBlog')
  .controller('TopicListCtrl',function($scope,$state,$mdDialog){
    $scope.addNewTopic = function(){
      $mdDialog.show({
          templateUrl:'../../views/admin/newTopic.html',
          fullscreen:true
      })
    };
  })
  .controller('CategoryListCtrl',function($scope,$state,$mdDialog){
    $scope.addNewCategory = function(){
      $mdDialog.show({
        templateUrl:'../../views/admin/newCategory.html',
        fullscreen:true
      })
    };
  });
