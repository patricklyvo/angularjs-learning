var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function($scope) {
  $scope.leaveVoicemail = function(number, message) {
    alert('Number: ' + number + ' said : ' + message);
  };
});

app.directive('phone', function() {
  return {
    restrict: 'E',
    scope: {
      number: '@', // reading in an attribute
      network: '=', // set up bidirectional two-way binding
      makeCall: '&' // calling something within scope of that controller
    },
    templateUrl: 'phone.html',
    link: function(scope) {
      scope.networks = ['Verizon', 'AT&T', 'Sprint'];
      scope.network = scope.networks[0];
    }
  };
});
