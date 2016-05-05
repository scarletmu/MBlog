/**
 * Created by scarlet on 16/5/5.
 */
angular.module('ScarletBlog')
.controller('AdminCtrl',function($scope,$state,User){
  function Init(){
  }
  User.checkLogin().then(function(data){
    Init();
  }).catch(function(err){
    console.log(err);
    alert('无授权');
    $state.go('topic');
  });

  $scope.goCategory = function(state){
    var target = 'admin.'+state;
    $state.go(target);
  }
});