angular.module('myApp', ['AppViews', 'ngRoute', 'ngAnimate'])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo : '/'
    });
  });
