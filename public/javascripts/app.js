angular.module("my_app", ['ngRoute']);


angular.module("my_app").config(function($routeProvider, $locationProvider){
   $routeProvider
    .when("/", {
        controller: 'HomeController as HomeCtrl',
        templateUrl: '/templates/home.html'
    })
  .when("/articles", {
    controller: 'ArticlesController as ArticlesCtrl',
    templateUrl: '/templates/articles.html',
    resolve: { async: ['$http', function($http) {
        return( $http.get('/users'))
    }]}
  })
  .when("/articles/new", {
    controller: 'ArticlesNewController as newArticleCtrl',
    templateUrl: '/templates/articles.new.html'
  })
   .when("/articles/show", {
     controller: 'ArticlesDetailController as detailArticleCtrl',
     templateUrl: '/templates/articles.edit.html'
   })
 .when("/articles/:id/edit", {
   controller: 'ArticlesEditController as detailCtrl',
   templateUrl: '/templates/articles.detail.html'

  })
   .when('/register', {
     controller: 'RegisterCtrl',
     templateUrl: '/templates/register.html'
   })
   .when('/login', {
     controller: 'LoginCtrl as loginData',
     templateUrl: '/templates/login.html'
   })


    $locationProvider.html5Mode(true);
});


angular.module("my_app").run([
  '$rootScope',
  function($rootScope,$scope, $route, $location) {
    // see what's going on when the route tries to change
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      console.log($scope, $rootScope, $route, $location);

      // next is an object that is the route that we are starting to go to
      // current is an object that is the route where we are currently
      var junk = 1;
      var currentPath = (current && current.$$route ) ? current.$$route.templateUrl : ' currentPath not set';
      var nextPath = (next  && next.$$route ) ? next.$$route.templateUrl : 'nextPath not set';

      console.log('Starting to leave %s to go to %s', currentPath, nextPath);
    });


    $rootScope.$on("$routeChangeSuccess",
      function (event, current, previous, rejection) {
        console.log('routeChangeSuccess');

        console.log($scope, $rootScope, $route, $location);
      });

  }
]);
