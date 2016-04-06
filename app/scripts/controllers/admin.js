/**
 * Created by Mu on 16/3/30.
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
  })
  .controller('AdminCtrl',function($scope,$state,User){
    function Init(){
    };
    User.checkLogin().then(function(data){
      Init();
    }).catch(function(err){
      console.log(err);
      alert('无授权');
      $state.go('topic');
    })

    $scope.goCategory = function(state){
      var target = 'admin.'+state;
      $state.go(target);
    }
  });
