/**
 * Created by Mu on 16/2/16.
 */
angular
  .module('ScarletBlog',[
    'ngAnimate',
    'ngMaterial',
    'ngAria',
    'ui.router',
    'ngSanitize',
    'ng-showdown',
    'ngFileUpload'
  ])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("topic");
    $stateProvider
      ////最高层页面
      //文章页
      .state('topic', {
        url: "/topic",
        templateUrl: "views/topics/topic.index.html"
      })
      .state('detail',{
        url:'/detail/:topicId',
        templateUrl:'views/topics/topicDetail.template.html'
      })
      .state('message',{
        url:'/message',
        templateUrl:'views/message.template.html'
      })

      //管理
      .state('admin',{
        url:'/admin',
        templateUrl:'views/admin/admin.index.html'
      })
      .state('admin.topicList',{
        url:'/topicList',
        templateUrl:'views/admin/list/topicList.template.html'
      })
      .state('admin.categoryList',{
        url:'/categoryList',
        templateUrl:'views/admin/list/categoryList.template.html'
      })
      .state('admin.commentList',{
        url:'/commentList',
        templateUrl:'views/admin/list/commentList.template.html'
      })
      .state('admin.newTopic',{
        url:'/newTopic',
        templateUrl:'views/admin/list/newTopic.dialog.html'
      })
      //登录
      .state('login',{
        url:'/login',
        templateUrl:'views/admin/login.template.html'
      })
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
  });
