/**
 * Created by Mu on 16/3/26.
 */
angular
  .module('ScarletBlog')
  .controller('AppCtrl',function($scope,User,$state,$mdSidenav,$window){
    $scope.admin = function(){
      User.checkLogin().then(function(){
        $state.go('admin');
      }).catch(function(){
        $state.go('login');
      })
    };
    $scope.sideNav = function(action){
      $window.open(action);
    };
    $scope.goMsg = function(){
      $state.go('message');
      $mdSidenav('left').close();
    };
    $scope.goAbout = function(){
      $state.go('about');
      $mdSidenav('left').close();
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
