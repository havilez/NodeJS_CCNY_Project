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


  this.save = function(article) {
    var dfd = $q.defer();
    $http.post("/articles/create", article)
      .then(function (response) {
        dfd.resolve( response.data );
      });
    return dfd.promise;
  }

  this.getArticle = function(id){
    var dfd = $q.defer();
    $http.get("/articles/edit/" + id)
      .then(function(response){
        dfd.resolve(response.data);
      });
    return dfd.promise;
  }

  this.deleteArticle = function(article){
    var dfd = $q.defer();
    $http.post("/articles/" + article._id + "/delete" )
      .then( function(){
        dfd.resolve();
      })
      .catch( function(err){
        dfd.reject(err.data);
      });
    return dfd.promise;

  }

})
