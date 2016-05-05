/**
 * Created by scarlet on 16/5/5.
 */
angular.module('ScarletBlog')
  .controller('LoginCtrl',function($scope,$state,User){
    $scope.login = function(){
      User.login($scope.username,$scope.password).then(function(data){
        alert('成功登录');
        $state.go('admin');
      }).catch(function(err){
        alert('登录失败');
      });
    };
  });