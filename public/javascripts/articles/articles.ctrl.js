angular.module("my_app")
  .controller('ArticlesController',function ($scope,ArticlesSvc) {

  self = this;


  self.getArticles = function(){
      ArticlesSvc.getArticles()
        .then( function(response){
          self.articles = response.articles;
          self.title = response.title;
        })
        .catch(function (error) {
          self.error = error;
        });
  }

  self.getArticles();



})
