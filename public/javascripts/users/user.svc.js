(function () {
  angular.module('my_app')
    .service('UserSvc', function ($http) {
      var svc = this
      svc.getUser = function () {
        return $http.get('/users')
          .then(function (response) {
            return response.data
          })
      }
      svc.login = function (username, password) {
        return $http.post('/sessions', {
          username: username, password: password
        }).then(function (response) {
          svc.token = response.data
          // contains type of encoding, which you store in header for getuser request
          $http.defaults.headers.common['X-Auth'] = response.data
          return svc.getUser()
        })
      }
      svc.register = function (username, password) {
        delete $http.defaults.headers.common['X-Auth'];
        return $http.post('/users', {
          username: username, password: password
        }).then(function () {
          return svc.login(username, password)
        })
      }
    })
}())
