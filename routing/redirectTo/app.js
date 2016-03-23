var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      templateUrl: 'app.html',
      controller: 'AppCtrl',
      controllerAs: 'app'
    }
  )
  .when('/cookies',
    {
      redirectTo: function(routeParams, path, search) {
          console.log(routeParams);
          console.log(path);
          console.log(search);
          return '/';
      }
    })
  .when('/cookies/:cookieType',
    {
      redirectTo: function(routeParams, path, search) {
        console.log(routeParams);
        console.log(path);
        console.log(search);
        return '/' + routeParams.cookieType;
      }
    }
  )
  .when('/sugar',
    {
      template: 'Sugar Cookie'
    }
  )
  .otherwise({
    redirectTo: '/'
  });
});

app.controller('AppCtrl', function() {
  var self = this;
  self.message = 'The app routing is working!';
});
