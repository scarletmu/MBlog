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
        templateUrl: "views/topic.html"
      })
      .state('detail',{
        url:'/detail/:topicId',
        templateUrl:'views/topicDetail.html'
      })
      .state('about',{
        url:'/about',
        templateUrl:'views/about.html'
      })
      .state('items',{
        url:'/item',
        templateUrl:'views/items.html'
      })
      .state('message',{
        url:'/message',
        templateUrl:'views/message.html'
      })

      //管理
      .state('admin',{
        url:'/admin',
        templateUrl:'views/admin/index.html'
      })
      .state('admin.topicList',{
        url:'/topicList',
        templateUrl:'views/admin/topicList.html'
      })
      .state('admin.categoryList',{
        url:'/categoryList',
        templateUrl:'views/admin/categoryList.html'
      })
      .state('admin.commentList',{
        url:'/commentList',
        templateUrl:'views/admin/commentList.html'
      })
      .state('admin.newTopic',{
        url:'/newTopic',
        templateUrl:'views/admin/newTopic.html'
      })
      //登录
      .state('login',{
        url:'/login',
        templateUrl:'views/admin/login.html'
      })
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
  });
