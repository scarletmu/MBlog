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
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("topic");
    //
    // Now set up the states
    $stateProvider
      .state('topic', {
        url: "/topic",
        templateUrl: "views/topic.html"
      })
      .state('topic.detail',{
        url:'/detail/'
      })
      //管理路由
      .state('admin',{
        url:'/admin',
        templateUrl:'views/admin/index.html'
      })
      .state('login',{
        url:'/login',
        templateUrl:'views/admin/login.html'
      })
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
  });
