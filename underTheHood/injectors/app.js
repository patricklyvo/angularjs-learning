var app = angular.module('app',[]);

app.factory('game', function() {
  return {
    title: 'Grand Thef Auto V'
  };
});

app.controller('AppCtrl', function($scope, $injector) {
  $injector.invoke(function(game) {
    alert(game.title);
    $scope.title = game.title;
  });
});

/*
angular.injector(['app']).invoke(function(game) {
  alert(game.title);
});

app.controller('AppCtrl', function($scope, game) {
  $scope.title = game.title;
});
*/
