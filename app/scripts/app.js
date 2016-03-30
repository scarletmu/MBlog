/**
 * Created by Mu on 16/2/16.
 */
angular
  .module('ScarletBlog',[
    'ngAnimate',
    'ngMaterial',
    'ngAria',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider){
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: "views/topic.html"
      })
      //管理路由
      .state('admin',{
        url:'/admin',
        templateUrl:'views/admin/index.html'
      });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
  });
