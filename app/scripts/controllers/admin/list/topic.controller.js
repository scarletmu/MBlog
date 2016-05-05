/**
 * Created by scarlet on 16/5/5.
 */
angular.module('ScarletBlog')
  .controller('TopicListCtrl',function($scope,$state,$mdDialog,Topic){
    $scope.page = 1;
    function Init(){
      Topic.getList($scope.page).then(function(data){
        $scope.topicList = data.data;
      });
    }
    Init();
    $scope.addNewTopic = function(){
      $mdDialog.show({
        templateUrl:'../../views/admin/newTopic.html',
        fullscreen:true
      }).then(function(){
        Init();
      })
    };
    $scope.EditTopic = function(id){
      sessionStorage.setItem('editTag',id);
      $mdDialog.show({
        templateUrl:'../../views/admin/newTopic.html',
        fullscreen:true
      }).then(function(){
        Init();
      })
    };
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
