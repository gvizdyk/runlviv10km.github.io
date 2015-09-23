angular.module('sortApp', [])

.controller('mainController', function($scope, $http) {
  $scope.sortType     = 'year'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchName   = '';     // set the default search/filter term
  
  $http.get('http://lvivskadesiatka.org.ua/json/results.json').then(function(res){
    $scope.sushi = res.data;
  });

});