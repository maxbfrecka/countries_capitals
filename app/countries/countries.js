viewsModule.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when("/countries", {
    templateUrl : "./countries/countries.html",
    controller : 'CountriesCtrl',
    controllerAs: 'vm'
    });
}]);

viewsModule.controller('CountriesCtrl', ['$scope', '$http', '$location', 'countryData', 'dataFactory', function($scope, $http, $location, countryData, dataFactory) {
	var vm = this;
	
/*	
	this.showCountry = function(country) {
  		$location.path('/countries/' + country.countryCode);
	};
*/


    getCountries();

    function getCountries() {
        dataFactory.getCountries()
            .then(function (response) {
                vm.countries = response.data.geonames;
                console.log(vm.countries);
            }, function (error) {
                console.log('failure to load');
            });
    }

    this.showCountry= function(country){
    	dataFactory.getCountry(country);

    }

    console.log(vm.countries);




/*	
	this.getCountries = function() {
		console.log('wtf yo');
		var request = {
    			username: 'maxbfrecka',
			};

		$http.get('http://api.geonames.org/countryInfoJSON?username=maxbfrecka'
    	).then(function(response) {
    			vm.results = response.data.geonames;
  			},
  			function(response) {
    			console.log('Failure :(');
  			});
    }
*/

}]);