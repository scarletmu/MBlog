/**
 * Created by scarlet on 16/5/5.
 */
angular.module('ScarletBlog')
  .controller('CommentListCtrl',function($scope,Comment){
  $scope.page = 1;
  Comment.getList($scope.page).then(function(data){
    $scope.commentList = data.data;
  });
});