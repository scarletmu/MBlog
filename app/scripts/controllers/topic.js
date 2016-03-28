/**
 * Created by Mu on 16/3/26.
 */
angular.module('ScarletBlog')
  .controller('TopicCtrl', function ($scope,$mdDialog,$mdMedia,Topic) {
    function Init(){
      $scope.page = 1;
      Topic.getList($scope.page).then(function(data){
        $scope.topicList = data.data;
      })
    }
    Init();
    $scope.clickAlert = function () {
    };
    $scope.showTopic = function(topicId,ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
      sessionStorage.setItem('topicId',topicId);
      $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/topicDialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:false,
          fullscreen: useFullScreen
        });
    };
    function DialogController($scope, $mdDialog,Topic) {
      $scope.todos = [
        {
          face :'imgs/test.jpg',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          face : 'imgs/test.jpg',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          face : 'imgs/test.jpg',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          face : 'imgs/test.jpg',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          face : 'imgs/test.jpg',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        }
      ];
      $scope.topicId = sessionStorage.getItem('topicId');
      function Init(){
        Topic.getDetail($scope.topicId).then(function(data){
          $scope.topicData = data.data;
        })
      }
      Init();
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }
  });
