angular.module('ScarletBlog')
  .controller('TopicManageCtrl', function ($scope, $showdown, $mdDialog, Topic) {
    $scope.topic = {};
    //Markdown转换
    $scope.parse = function () {
      $scope.html = $showdown.makeHtml($scope.topic.content);
    };
    $scope.close = function () {
      $mdDialog.cancel();
    };
    $scope.save = function () {
      Topic.addTopic($scope.topic).then(function (data) {
        console.log(data);
      });
    };
  })
  .controller('CategoryManageCtrl',function($scope,$mdDialog){
    $scope.close = function () {
      $mdDialog.cancel();
    };
  });
