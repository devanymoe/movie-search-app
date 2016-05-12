angular
  .module('myApp')
  .directive('dmMovie', function() {
    return {
      templateUrl: '../partials/movie.html',
      scope: {
        movie: '=movieData'
      }
    }
  })
