angular.module("my_app")
    .service('ArticlesSvc',function ($q, $http) {


  function getArticles() {
    var dfd = $q.defer();
    $http.get("/api/articles", articles)
      .then(function (response) {
         dfd.resolve( articles.data );
      });
    return dfd.promise;
  }

})
