//routing
angular.module('COH', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'templates/home.html'}).
      when('/hostGame', {templateUrl: 'templates/hostGame.html', controller:'HostGameCtrl'}).
      when('/game', {templateUrl: 'templates/game.html', controller:'GameCtrl'}).
      when('/howToPlay', {templateUrl: 'templates/howToPlay.html'}).
      when('/joinGame', {templateUrl: 'templates/joinGame.html', controller: 'PassKeyCtrl'}).
      otherwise({redirectTo: '/'});
}]).config(['$httpProvider', function($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);
