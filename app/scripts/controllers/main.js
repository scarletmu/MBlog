/**
 * Created by Mu on 16/3/26.
 */
angular
  .module('ScarletBlog')
  .controller('AppCtrl',function($scope,Auth,$state){
    $scope.imagePath = 'imgs/test.jpg';
    $scope.admin = function(){
      $state.go('login');
    };
  })
  .controller('NavCtrl',function($scope,$mdSidenav){
    $scope.toggleLeft = buildToggler('left');
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
      }
    }
  });
