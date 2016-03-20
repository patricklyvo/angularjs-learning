var app = angular.module('app', []);

/*app.directive('dumbPassword', function() {
  var validElement = angular.element('<div>{{ model.input }}</div>');

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'dumbpass.html',
    link: function(scope, element) {
      scope.$watch("model.input", function(value) {
        if(value === "password") {
          element.children(1).toggleClass("alert-box alert");
          //console.log('change your password');
        }
      });
    }
  }
});*/

app.directive('dumbPassword', function() {
  var validElement = angular.element('<div>{{ model.input }}</div>');

  var link = function(scope) {
    scope.$watch("model.input", function (value) {
      if(value === "password") {
        validElement.toggleClass("alert-box alert");
        console.log('matched password');
      }
    });
  };

  return {
    restrict: "E",
    replace: true,
    templateUrl: "dumbpass.html",
    compile: function(tElem) {
      tElem.append(validElement);

      return link;
    }
  }
});
