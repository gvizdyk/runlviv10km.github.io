var App = angular.module('sortApp', [])

App.config([
    '$interpolateProvider', function($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

App.controller('mainController', function($scope, $http, $filter) {
  $scope.sushi = [];
  $scope.sortType     = 'rank'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchName   = '';     // set the default search/filter term
  
  $http.get('http://lvivskadesiatka.org.ua/json/results.json').then(function(res){
    $scope.sushi = res.data;
  });

	$scope.filterWIthSearch = function() {
	    var items = $filter('filter')($scope.sushi, ($scope.search||{}).category||"");
	    items = $filter('sortType')(items, '-rank');
	    return items;
	};

});