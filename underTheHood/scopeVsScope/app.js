angular.module('app', [])
.controller('TestCtrl', function($scope, $http) {
  console.log($scope);
  console.log($http);
})
.directive('testDirective', function() {
  return {
    scope: {},
    link: function(scope) {
      console.log(scope);
    }
  }
})
