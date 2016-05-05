/**
 * Created by scarlet on 16/5/5.
 */
angular.module('ScarletBlog')
.controller('CategoryListCtrl',function($scope,$state,$mdDialog,Category){
  $scope.page = 1;
  function Init(){
    Category.getList($scope.page).then(function(data){
      $scope.categoryList = data.data;
    });
  }
  Init();
  $scope.addNewCategory = function(){
    $mdDialog.show({
      templateUrl:'../../views/admin/dialog/newCategory.dialog.html',
      fullscreen:true
    })
  };
  //翻页
  $scope.privPage = function(){
    $scope.page == 1?$scope.page=1:$scope.page--;
    Init();
  };
  $scope.nextPage = function(){
    $scope.page++;
    Init();
  }
});