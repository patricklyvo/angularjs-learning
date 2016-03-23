var app = angular.module('myApp', ['ngRoute']);

/*
app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      templateUrl: 'app.html',
      controller: 'AppCtrl',
      controllerAs: 'app'
    }
  );
});
*/

app.controller('AppCtrl', function($route) {
  $route.routes['/'] = {
    templateUrl: 'app.html',
    controller: 'AppCtrl',
    controllerAs: 'app'
  }

  var self = this;
  self.message = 'The app routing is working!';
});
