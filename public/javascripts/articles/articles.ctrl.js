angular.module("my_app").controller('ArticlesController',function ($scope,ArticlesSvc) {

  self = this;



  this.getArticles = function(){
      ArticleSvc.getArticles()
        .then( function(articles){
          self.articles = articles;
        })
        .catch(function (error) {
          self.error = error;
        });
  }




})
