(function () {
  angular.module('my_app')
    .controller('RegisterCtrl', function ($scope, $location, UserSvc) {
      $scope.register = function (username, password) {
        UserSvc.register(username, password)
          .then(function (user) {
            $scope.$emit('login', user);
            $location.path("/");
          })
      }
    })
}())
