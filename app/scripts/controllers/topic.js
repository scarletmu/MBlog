/**
 * Created by Mu on 16/3/26.
 */
angular.module('ScarletBlog')
  .controller('TopicCtrl', function ($scope,$mdDialog,$mdMedia,Topic,Category) {
    function Init(){
      $scope.page = 1;
      Topic.getList($scope.page).then(function(data){
        $scope.topicList = data.data;
        Category.getList().then(function(data){
          $scope.categoryList = data.data;
        })
      })
    }
    Init();
    $scope.clickAlert = function () {
    };
    $scope.showTopic = function(topicId,ev) {
      sessionStorage.setItem('topicId',topicId);
      $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/topicDialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:false,
          fullscreen: true
        });
    };
    function DialogController($scope, $mdDialog,Topic,$state,$showdown,Comment) {
      $scope.topicId = sessionStorage.getItem('topicId');
      function Init(){
        Topic.getDetail($scope.topicId).then(function(data){
          data.data.html = $showdown.makeHtml(data.data.Content);
          $scope.topicData = data.data;
          return true;
        })
        .then(function(){
          return Comment.getListByTopic($scope.topicId);
        })
        .then(function(comment){
          $scope.commentData = comment.data;
        });
      }

      Init();
      //Dialog操作
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      //查看详情
      $scope.goDetail = function(){
        $mdDialog.hide();
        $state.go('detail',{topicId:$scope.topicId})
      }
    }
  });
