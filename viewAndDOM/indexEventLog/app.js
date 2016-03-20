var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  var self = this;

  self.cars = 'BMW,Lexus,Mercedes,Porsche';
});

app.config(function($logProvider) {
  $logProvider.debugEnabled(true);
});

app.run(function($rootScope, $log) {
  $rootScope.$log = $log;
});
