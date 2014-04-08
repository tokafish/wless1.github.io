var app = angular.module('scopesIntroduction', []);

app.controller('SimpleController', function($scope) {
  $scope.message = 'Hello Angular!';
});

app.controller('HelloController', function($scope) {
$scope.message = 'Hello World!';
});

app.controller('GoodbyeController', function($scope) {
$scope.message = 'Goodbye World!';
});

app.controller('OuterController', function($scope) {
$scope.outer = 'From the outside';
});

app.controller('InnerController', function($scope) {
$scope.inner = 'looking in.';
});

app.controller('EditController', function($scope) {
  $scope.userIsAdmin = true;
  $scope.message = 'Redact me';
});

app.controller('EditController2', function($scope) {
  $scope.userIsAdmin = true;
  $scope.message = {
    content: 'Redact me'
  };
});

app.directive('isolated', function() {
  return {
    scope: {},
    template: '<input ng-model="message.content"> <span>{{message.content}}</span>'
  };
});

app.directive('isolated2', function() {
  return {
    scope: {
      message: '='
    },
    template: '<input ng-model="message.content"> <span>{{message.content}}</span>'
  };
});

app.controller('EditController3', function($scope) {
  $scope.message = {
    content: "I'm on the outside"
  };
  $scope.parentMessage = {
    content: "Now I can get in"
  };
});

var apps = document.querySelectorAll(".angular-example");

for (var i = 0; i < apps.length; i++) {
  angular.bootstrap(apps[i],['scopesIntroduction']);
}