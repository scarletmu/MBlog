/**
 * Created by scarlet on 16/5/5.
 */
angular.module('ScarletBlog')
  .controller('CommentListCtrl',function($scope,Comment){
    $scope.page = 1;
    function Init(){
      Comment.getList($scope.page).then(function(data){
        $scope.commentList = data.data;
      });
    }
    Init();
    //翻页
    $scope.privPage = function(){
      $scope.page == 1?$scope.page=1:$scope.page--;
      Init();
    };
    $scope.nextPage = function(){
      $scope.page++;
      Init();
    }
});