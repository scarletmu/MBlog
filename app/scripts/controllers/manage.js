angular.module('ScarletBlog')
  .controller('TopicManageCtrl', function ($scope, $showdown, $mdDialog, Category, Admin) {
    $scope.topic = {};
    function Init(){
     Category.getList().then(function(data){
       $scope.categories = data.data;
     })
    }
    Init();
    //Markdown转换
    $scope.parse = function () {
      $scope.html = $showdown.makeHtml($scope.topic.Content);
    };
    $scope.close = function () {
      $mdDialog.cancel();
    };
    $scope.save = function () {
      Admin.addTopic($scope.topic).then(function (data) {
        alert('保存成功');
        $mdDialog.cancel();
      }).catch(function(err){
        alert('保存失败');
      });
    };
  })
  .controller('CategoryManageCtrl',function($scope,$mdDialog,Admin){
    $scope.args = {};
    $scope.close = function () {
      $mdDialog.cancel();
    };
    $scope.save = function(){
      Admin.addCategory($scope.args).then(function(data){
        alert('保存成功!');
        $mdDialog.cancel();
      }).catch(function(err){
        alert('保存失败!');
      });
    }
  });
