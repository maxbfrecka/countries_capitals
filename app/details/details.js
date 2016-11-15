viewsModule.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when("/countries/:countryCode", {
    templateUrl : "./details/details.html",
    controller : 'DetailsCtrl',
    controllerAs : 'vm'
  });
}]);

viewsModule.controller('DetailsCtrl', ['$scope', 'dataFactory', function($scope, dataFactory) {
	var vm = this;
	dataFactory.getInfo();
	vm.country = dataFactory.currentCountry;
	console.log('this is the detail:' + vm.country);

	vm.capital;
	vm.neighbors;

    getCapital(vm.country.countryCode);
    getNeighbors(vm.country.countryCode);

    function getCapital(countryCode) {
        dataFactory.getCapital(countryCode)
            .then(function (response) {
                vm.capital = response.data.geonames;
                console.log ('get capital response:' + response);
                console.log(vm.capital);
            }, function (error) {
                console.log('failure to load');
            });
    }

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