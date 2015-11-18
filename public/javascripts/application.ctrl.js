(function () {
  angular.module('my_app')
    .controller('ApplicationCtrl', function ($scope) {
      var self = this;
      $scope.$on('login', function (_, user) {
        self.currentUser = user
      })
    })
}());
