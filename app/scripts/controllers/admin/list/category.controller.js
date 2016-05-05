/**
 * Created by scarlet on 16/5/5.
 */
angular.module('ScarletBlog')
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