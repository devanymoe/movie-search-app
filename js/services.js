angular
  .module("myApp")
  .factory("movieServices", function($http) {
    var movies;
    return {
      returnMovies: function(query) {
        return $http.get('http://www.omdbapi.com/?s=' + query).then(function(data) {
          return data.data.Search;
        });
      },
      returnMovieDetails: function(id) {
        return $http.get('http://www.omdbapi.com/?i=' + id).then(function(data) {
          return data.data;
        });
      }

    }
  });
