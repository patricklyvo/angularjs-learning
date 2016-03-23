var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/:message',
    {
      templateUrl: 'app.html',
      controller: 'AppCtrl',
      controllerAs: 'app'
    }
  )
  .when('/:firstName/:middleName/:lastName',
    {
      templateUrl: 'name.html',
      controller: 'NameCtrl',
      controllerAs: 'name'
    }
  );
});

app.controller('AppCtrl', function($routeParams) {
  var self = this;
  self.message = $routeParams.message;
});

app.controller('NameCtrl', function($routeParams) {
  var self = this;
  self.message = $routeParams.firstName + ' ' + $routeParams.middleName + ' ' + $routeParams.lastName;
});
