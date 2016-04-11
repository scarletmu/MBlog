angular.module('ScarletBlog').controller('DetailCtrl',function($scope,$stateParams,$showdown,Topic,Comment){
  $scope.topicId = $stateParams.topicId;
  $scope.comment = {topicId:$scope.topicId};
  function Init(){
    Topic.getDetail($scope.topicId)
      .then(function(data){
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
  $scope.saveComment = function(){
    Comment.addComment($scope.comment).then(function(data){
      alert('提交成功');
      $scope.comment = {topicId:$scope.topicId};
    }).catch(function(err){
      alert('提交失败');
    });
  };
});
