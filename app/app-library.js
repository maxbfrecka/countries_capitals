angular.module('appLibrary', [])

  .constant('API_PREFIX', 'api.geonames.org/countryInfo?')
  .constant('API_USERNAME', 'maxbfrecka')
 // .constant('OWM_CITIES_JSON_FILE', './owm-cities.json')

  .factory('countriesRequest', ['$http', '$q', 'API_PREFIX', 'API_USERNAME', function($http, $q, API_PREFIX, API_USERNAME){
    return function(params){
      var reqParams = angular.extend({}, params, {username:API_USERNAME});
      return $http.get(API_PREFIX, {params: reqParams})
        .then(function(response){
          return $q.when(response.data);
        });
    };


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
*/




  }]); 
