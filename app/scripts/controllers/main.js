/**
 * Created by Mu on 16/3/26.
 */
angular
  .module('ScarletBlog')
  .controller('AppCtrl',function($scope,User,$state){
    $scope.imagePath = 'imgs/test.jpg';
    $scope.admin = function(){
      User.checkLogin().then(function(){
        $state.go('admin');
      }).catch(function(){
        $state.go('login');
      })
    };
    $scope.response = function(){
      alert('!');
    }
  })
  .controller('BarCtrl',function($scope,$mdSidenav){
    $scope.toggleLeft = buildToggler('left');
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
      }
    }
  })
