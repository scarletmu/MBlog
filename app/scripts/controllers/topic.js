/**
 * Created by Mu on 16/3/26.
 */
angular.module('ScarletBlog')
  .controller('TopicCtrl', function ($scope,$q,$mdDialog,$mdMedia,Topic,Category) {
    function Init(){
      $scope.page = 1;
      $scope.isSelect = false;
      $q.all([
        Topic.getList($scope.page),
        Category.getList()
      ]).then(function(data){
        $scope.topicList = data[0].data;
        $scope.categoryList = data[1].data;
      });
    }
    Init();
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

    $scope.selectCategory = function(id){
      $scope.isSelect = true;
      Topic.getListByCategory(id).then(function(data){
        $scope.topicList = data.data;
      })
    };
    function DialogController($scope, $mdDialog,Topic,$state,$showdown,Comment) {
      $scope.topicId = sessionStorage.getItem('topicId');
      function Init(){
        Topic.getDetail($scope.topicId).then(function(data){
          data.data.html = $showdown.makeHtml(data.data.Content);
          $scope.topicData = data.data;
        })
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
