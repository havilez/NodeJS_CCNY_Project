(function () {
  angular.module('my_app')
    .controller('LoginCtrl', function ($scope, $location, UserSvc) {
      var self = this;


      self.loginFunc = function (username, password) {
        UserSvc.login(self.username, self.password)
          .then(function (user) {
            $scope.$emit('login', user);
            $location.path("/articles");
          })
      }
    })
}());
