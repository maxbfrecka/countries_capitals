viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries", {
    templateUrl : "./countries/countries.html",
    controller : 'CountriesCtrl',
    });
}]);

viewsModule.controller('CountriesCtrl', ['$scope', 'countriesRequest', function($scope, countriesRequest) {
	$scope.countries = countriesRequest;

}]);