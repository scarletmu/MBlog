angular.module('ScarletBlog')
  .controller('TopicManageCtrl', function ($scope, $showdown,$timeout, $mdDialog,Topic, Category, Admin,Upload) {
    $scope.topicId = sessionStorage.getItem('editTag');
    if($scope.topicId){
      sessionStorage.removeItem('editTag');
      Topic.getDetail($scope.topicId).then(function(data){
        $scope.topic = data.data;
        $scope.isUpdate = true;
      })
    }else{
      $scope.topic = {};
      $scope.isUpdate = false;
    }

    $scope.images = [];
    function Init(){
     Category.getList().then(function(data){
       $scope.categories = data.data;
     })
    }
    Init();
    $scope.uploadImage = function(file){
      $scope.f = file;
      if(file){
        Admin.getToken()
          .then(function(data){
            var token = data.data;
            return Upload.upload({
              url: 'http://v0.api.upyun.com/scarletmu',
              data: {file: file,policy:token.policy,signature:token.signature}
            })
          })
          .then(function(res){
            $timeout(function(){
            if(res.status == 200){
              alert('上传成功!');
              $scope.images.push('http://scarletmu.b0.upaiyun.com'+res.data.url);
            }else{
              alert('上传失败!请再次尝试');
            }
          })
        })
      }
    };
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
    $scope.update = function(){
      Admin.editTopic($scope.topicId,$scope.topic).then(function (data) {
        alert('保存成功');
        $mdDialog.cancel();
      }).catch(function(err){
        alert('保存失败');
      });
    }
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
