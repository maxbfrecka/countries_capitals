angular.module('myApp', ['AppViews', 'ngRoute', 'ngAnimate', 'Data'])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo : '/'
    });
  });
