function TestCtrl() {
  var self = this;

  self.showBoxOne = false;
  self.showBoxTwo = false;
  self.people = [
    { name: "Barack Obama" },
    { name: "Donald Trump" },
    { name: "Bernie Sanders" }
  ];
  self.bigger = false;
  self.lightTheme = false;
}

angular.module('app', ['ngAnimate'])
  .controller('TestCtrl', TestCtrl);
