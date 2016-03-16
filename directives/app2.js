angular.module('functionalities', []);

angular.module('functionalities')
  .directive('entering', function() {
    return function(scope, element, attrs) {
      element.bind('mouseenter', function() {
        //console.log('Mouse has entered the div');
        element.addClass(attrs.entering);
      })
    }
  })
  .directive('leaving', function() {
    return function(scope, element, attrs) {
      element.bind('mouseleave', function() {
        //console.log('Mouse has left the div');
        element.removeClass(attrs.entering);
      })
    }
  });
