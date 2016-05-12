angular
  .module('myApp')
    .controller('SearchController', SearchController)
    .controller('ResultsController', ResultsController)
    .controller('ShowController', ShowController)

SearchController.$inject = ['$route', '$http', 'movieServices', '$location'];

function SearchController($route, $http, movieServices, $location) {
  this.searchMovies = function(searchQuery) {
    var query = searchQuery.replace(/ /g, '+');
    $location.path('/' + query);
  }
}

ResultsController.$inject = ['$route', '$http', 'movieServices', '$location', '$routeParams'];

function ResultsController($route, $http, movieServices, $location, $routeParams) {
  movieServices.returnMovies($routeParams.searchTerm).then((data) => {
    this.movies = data;
  });
}

ShowController.$inject = ['movieServices', '$routeParams'];

function ShowController(movieServices, $routeParams) {
  movieServices.returnMovieDetails($routeParams.id).then((data) => {
    this.movie = data;
  })

}
