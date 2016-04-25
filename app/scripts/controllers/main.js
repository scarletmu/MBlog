/**
 * Created by Mu on 16/3/26.
 */
angular
  .module('ScarletBlog')
  .controller('AppCtrl',function($scope,User,$state,Category){
    function Init(){
      Category.getList().then(function(data){
        $scope.categoryList = data.data;
      });
    }
    Init();
    $scope.admin = function(){
      User.checkLogin().then(function(){
        $state.go('admin');
      }).catch(function(){
        $state.go('login');
      })
    };
  })
  .controller('BarCtrl',function($scope,$mdSidenav,$state){
    $scope.toggleLeft = buildToggler('left');
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
      }
    }
    $scope.goHome = function(){
      $state.go('topic');
    };
  });
