/**
 * Created by Mu on 16/3/26.
 */
angular.module('ScarletBlog')
  .controller('TopicCtrl', function ($scope,$mdDialog,$mdMedia) {
    $scope.clickAlert = function () {
    };
    $scope.showTopic = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
      $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/topicDialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        });
    };
    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }
  });