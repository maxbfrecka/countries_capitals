angular.module('Data', [])

.factory('countryData', ['dataFactory', function(dataFactory) {
  var countryData = {};

  console.log('inside Data and countryData:' + countryData.countries);
  return countryData;
}]);