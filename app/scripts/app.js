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
    'ng-showdown'
  ])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("topic");
    $stateProvider
      //最高层路由
      .state('topic', {
        url: "/topic",
        templateUrl: "views/topic.html"
      })
      .state('detail',{
        url:'/detail/'
      })

      //管理路由
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
      //登录路由
      .state('login',{
        url:'/login',
        templateUrl:'views/admin/login.html'
      })
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
  });
