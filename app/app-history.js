angular.module('appHistory', [])
.factory('appHistory', function() {
  var historyQueue = [];
  return {
    push: function(entry) {
      historyQueue.push(entry);
    },
    list: function() {
      return historyQueue;
    }
  };
})
.controller('HistoryCtrl', ['appHistory', '$scope', function(appHistory, $scope) {
  var vm = this;
  $scope.$watchCollection(
    function() {
      return owmHistory.list();
    },
    function(oldListings, newListings) {
      vm.listings = newListings;
    }
  );
}]);