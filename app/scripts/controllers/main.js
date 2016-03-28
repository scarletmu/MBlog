/**
 * Created by Mu on 16/3/26.
 */
angular
  .module('ScarletBlog')
  .controller('AppCtrl',function($scope){
    $scope.imagePath = 'imgs/test.jpg';
  })
  .controller('NavCtrl',function($scope,$mdSidenav){
    $scope.toggleLeft = buildToggler('left');
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
    }
  });
