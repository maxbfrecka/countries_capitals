viewsModule.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when("/countries/:countryCode", {
    templateUrl : "./details/details.html",
    controller : 'DetailsCtrl',
    controllerAs : 'vm'
  });
}]);

viewsModule.controller('DetailsCtrl', ['$scope', 'dataFactory', '$route', function($scope, dataFactory, $route) {
	var vm = this;
//	dataFactory.getInfo();
//	vm.country = dataFactory.currentCountry;
//	console.log('this is the detail:' + vm.country);

	vm.country;
	vm.capital;
	vm.neighbors;
	vm.countryDetail;

	getCountryDetails($route.current.params.countryCode);
    getCapital($route.current.params.countryCode);
    getNeighbors($route.current.params.countryCode);

    function getCapital(countryCode) {
        dataFactory.getCapital(countryCode)
            .then(function (response) {
                vm.capital = response.data.geonames[0];
                console.log ('get capital response:' + response);
                console.log(vm.capital);
            }, function (error) {
                console.log('failure to load');
            });
    }

    function getCountryDetails(route){
		dataFactory.getCountryDetails(route)
			.then(function(response){
				vm.country = response.data.geonames[0];
				console.log('response');
			}, function(error){
				console.log('failure to get details');
			});   
    };

    this.showCountry= function(country){
    	dataFactory.getCountry(country);
    }

    function getNeighbors(countryCode) {
    	dataFactory.getNeighbors(countryCode)
    		.then(function (response) {
    			vm.neighbors = response.data.geonames;
    			console.log (vm.neighbors);
    		}, function (error) {
                console.log('failure to load');
            });
    }




}]);