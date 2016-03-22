var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      templateUrl: 'app.html',
      controller: 'AppCtrl',
      controllerAs: 'app'
    }
  )
  .when('/alternate',
    {
      template: '<h2>{{ alt.message }}</h2>',
      controller: 'AltCtrl',
      controllerAs: 'alt'
    }
  )
  .otherwise('/');
});

app.controller('AppCtrl', function() {
  var self = this;
  self.message = 'The app routing is working!';
});

app.controller('AltCtrl', function() {
  var self = this;
  self.message = 'The alternate page is working!';
});
