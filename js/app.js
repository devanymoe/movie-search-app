angular
  .module('myApp', ['ngRoute'])
  .config(routeHandler)

routeHandler.$inject = ['$routeProvider', '$locationProvider'];

function routeHandler($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/search.html',
      controller: 'SearchController as ctrl'
    })
    .when('/:searchTerm', {
      templateUrl: 'partials/results.html',
      controller: 'ResultsController as ctrl'
    })
    .when('/:id/show', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController as ctrl'
    })
    .otherwise({
      templateUrl: 'partials/search.html',
      controller: 'SearchController as ctrl'
    })
  $locationProvider.html5Mode(true);
}
