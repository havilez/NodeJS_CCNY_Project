angular.module("my_app")
    .service('ArticlesSvc',function ($q, $http) {


  this.getArticles = function() {
    var dfd = $q.defer();
    $http.get("/articles")
      .then(function (response) {
         dfd.resolve( response.data );
      });
    return dfd.promise;
  }

})
