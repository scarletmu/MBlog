angular.module('ScarletBlog').controller('DetailCtrl',function($scope,$q,$stateParams,$showdown,Topic,Comment){
  $scope.topicId = $stateParams.topicId;
  $scope.comment = {topicId:$scope.topicId};
  function Init(){
    $q.all([
      Topic.getDetail($scope.topicId),
      Comment.getListByTopic($scope.topicId)
    ]).then(function(data){
      //0为文章,1为评论
      data[0].data.html = $showdown.makeHtml(data[0].data.Content);
      $scope.topicData = data[0].data;
      $scope.commentData = data[1].data;
    });
  }
  Init();
  $scope.saveComment = function(){
    Comment.addComment($scope.comment).then(function(data){
      alert('提交成功');
      $scope.comment = {topicId:$scope.topicId};
      Init();
    }).catch(function(err){
      alert('提交失败');
    });
  };
});
