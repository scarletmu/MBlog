angular.module('ScarletBlog').controller('DetailCtrl',function($scope,$q,$stateParams,$showdown,Topic,Comment,$window,$location){
  $scope.topicId = $stateParams.topicId;
  $scope.comment = {topicId:$scope.topicId};
  console.log();
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

  $scope.Share = function(){
    $scope.nowUrl = 'https://scarletmu.space/#'+$location.url();
      (function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=$scope.nowUrl,p=['url=',e(u),'&title=',e($scope.topicData.Title),'&pic=',e($scope.topicData.Thumbnail)].join('');
        function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};
        if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent);
  }
});
