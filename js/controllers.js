angular
  .module('myApp')
    .controller('SearchController', SearchController)
    .controller('ResultsConroller', ResultsController)
    .controller('ShowController', ShowController)

SearchController.$inject = ['$route'];

function SearchController($route) {

}

ResultsController.$inject = ['$route'];

function ResultsController($route) {

}

ShowController.$inject = ['$route'];

function ShowController($route) {

}
