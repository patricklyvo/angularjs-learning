function TestCtrl() {
  // basic controller where we preset the scope myString variable
  var self = this;
  self.myString = "hello world";

  self.people = [
    {
      name: "Eric Simons",
      born: "Chicago"
    },
    {
      name: "Albert Pai",
      born: "Taiwan"
    },
    {
      name: "Matthew Greenster",
      born: "Virginia"
    },
    {
      name: "Will Smith",
      born: "Pennsylvania"
    },
    {
      name: "Mark Zuckerberg",
      born: "New York"
    },
    {
      name: "Bill Gates",
      born: "Washington"
    }
  ];

}

// this is where the filter magic happens.
function CapitalizeFilter() {
  // this is the function that Angular will execute when the expression is evaluated
  return function (text) {
    // text is the original string output of the Angular expression
    return text.toUpperCase();
    // and we simply return the text in upper case!
  }
}

angular.module('app', [])
.controller('TestCtrl', TestCtrl)
// define a filter called 'capitalize' that will invoke the CapitalizeFilter function
.filter('capitalize', CapitalizeFilter);
