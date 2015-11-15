angular.module("my_app")
  .service('ArticlesNewSvc',function ($q, $http) {


    this.addArticle = function() {
      var dfd = $q.defer();
      $http.post("/articles/create")
        .then(function (response) {
          dfd.resolve( response.data );
        });
      return dfd.promise;
    }

  })
