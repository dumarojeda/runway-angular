
var app = angular.module('runwayApp',['ngRoute', 'slick']);

/*
 * Routes
 */
app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/buy_complete', {controller: 'dataWhishlist', templateUrl: 'views/buy_complete.html'})
    .when('/', {controller: 'dataWhishlist', templateUrl: 'views/home.html'})
}]);

/*
 * Controllers
 */

// Data Carousel
app.controller('dataCarousel', function($scope, $http) {
  $http.get('api/carousel.json').
    success(function(data) {
      $scope.slides = data.slides;
    });
});

//
app.filter('sumData', function () {
  return function (data, key) {
    if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
      return 0;
    }
    var sum = 0;
    for (var i = data.length - 1; i >= 0; i--) {
      sum += parseInt(data[i][key]);
    }
    return sum;
  };
});

// Data Whishlist
app.controller('dataWhishlist', function($scope, $http) {
  $http.get('api/buytable.json').
    success(function(data) {
      $scope.items = data.buyTable;

      // Delete Item
      $scope.remove = function(item){ 
        var index = $scope.items.indexOf(item)
        $scope.items.splice(index,1);     
      };

    });
});