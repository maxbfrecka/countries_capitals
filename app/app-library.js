angular.module('appLibrary', [])
  .factory('dataFactory', ['$http', '$q', '$location', function($http, $q, $location){ 

    var dataFactory = {};


    dataFactory.getCountries = function () {
        return $http.get('http://api.geonames.org/countryInfoJSON?username=maxbfrecka', {cache:true});
      }

    dataFactory.currentCountry = {};

    dataFactory.getCapital = function(countryCode){
      var request = {
        username: 'maxbfrecka',
        q: 'capital',
        formatted: true,
        country: countryCode,
        maxRows: 1
      }
      return $http.get('http://api.geonames.org/searchJSON?', {cache:true, params: request})
    }

    dataFactory.getInfo = function(){
      console.log('current getInfo is:' + dataFactory.currentCountry);
      return dataFactory.currentCountry;
    }

    dataFactory.getCountry = function (country){
      $location.path('/countries/' + country.countryCode);
      dataFactory.currentCountry.population = country.population;
      dataFactory.currentCountry.area = country.areaInSqKm;
      dataFactory.currentCountry.countryName = country.countryName;
      dataFactory.currentCountry.countryCode = country.countryCode;
      dataFactory.currentCountry.capital = country.capital;
      dataFactory.currentCountry.capitalPopulation = 'population of capital?'
      dataFactory.currentCountry.neighbors = 'here are neighbors';
      console.log(dataFactory.currentCountry);
      return dataFactory.currentCountry;
    };

    dataFactory.getNeighbors = function(countryCode){
      var request = {
        username: 'maxbfrecka',
        country: countryCode
      }
      return $http.get('http://api.geonames.org/neighboursJSON?', {cache:true, params: request})
    }

    dataFactory.getInfo = function(country){
    };

    return dataFactory;

}]);



//old way - was working
//dataFactory.getCountries = function () {
//        return $http.get('http://api.geonames.org/countryInfoJSON?username=maxbfrecka');




 // .constant('OWM_CITIES_JSON_FILE', './owm-cities.json')


/*
  .factory('countriesRequest', ['$http', '$q', 'API_USERNAME', function($http, $q, API_PREFIX, API_USERNAME){
    return function(params){
      var reqParams = angular.extend({}, params, {username:API_USERNAME});
      return $http.get('api.geonames.org/countryInfo?', {params: reqParams})
        .then(function(response){
          return $q.when(response.data);
        });
    };
*/

/*
    var request = {
          username: 'maxbfrecka',
    }
    
    $http({
        url: 'api.geonames.org/countryInfo?',
        method: 'GET',
        params: request
    }).then(function(response) {
        var results = response.data.countries;
        return results;
    },
      function(response) {
        console.log('Failure :(');
            
    });

    var test = 'testing';

    return test;

  }]); 
*/