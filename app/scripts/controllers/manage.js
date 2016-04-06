angular.module('ScarletBlog').controller('TopicManageCtrl',function($scope,$showdown){
  $scope.topic = {};
  $scope.parse = function(){
    $scope.html = $showdown.makeHtml($scope.topic.content);
  }
});
