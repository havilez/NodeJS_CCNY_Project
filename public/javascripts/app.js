angular.module("my_app", ['ngRoute']);


angular.module("my_app").config(function($routeProvider, $locationProvider){
   $routeProvider
    .when("/", {
        controller: 'HomeController as HomeCtrl',
        templateUrl: '/templates/home.html'
    })
  .when("/articles", {
    controller: 'ArticlesController as ArticlesCtrl',
    templateUrl: '/templates/articles.html'
  });
    $locationProvider.html5Mode(true);
});
