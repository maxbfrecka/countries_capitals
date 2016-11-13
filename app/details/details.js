viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries/:countryCode", {
    templateUrl : "./details/details.html",
    controller : 'DetailsCtrl'
  });
}]);

viewsModule.controller('DetailsCtrl', ['scope', function($scope) {

}]);