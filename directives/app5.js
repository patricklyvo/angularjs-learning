angular.module('greetings', [])
.directive("welcome", function() {
  return {
    restrict: "E",
    scope: {},
    //template: "<div>This is the welcome component</div>"
    transclude: true,
    template: "<div>This is the welcome component</div><ng-transclude></ng-transclude>"
  }
});
