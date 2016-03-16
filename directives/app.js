angular.module('greetings', []);

angular.module('greetings')
  .directive('welcome', function() {
    return {
      restrict: 'A',
      link: function() {
        alert("Howdy!");
      }
    }
  })
  .directive('goodbye', function() {
    return {
      restrict: 'A',
      link: function() {
        alert("See ya later!");
      }
    }
  });

// comment
/*angular.module('greetings')
  .directive('welcome', function() {
    return {
      restrict: 'M',
      link: function() {
        alert("Howdy!");
      }
    }
  });*/

// class
/*angular.module('greetings')
  .directive('welcome', function() {
    return {
      restrict: 'C',
      link: function() {
        alert("Howdy!");
      }
    }
  });*/

// attribute
/*angular.module('greetings')
  .directive('welcome', function() {
    return {
      restrict: 'A',
      link: function() {
        alert("Howdy!");
      }
    }
  });*/

// element
/*angular.module('greetings')
  .directive('welcome', function() {
    return {
      restrict: 'E',
      template: '<div>Howdy there! You look splendid.</div>'
    }
  });*/
