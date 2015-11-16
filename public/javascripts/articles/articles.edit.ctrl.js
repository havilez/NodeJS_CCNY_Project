angular.module("my_app")
  .controller('ArticlesEditController',function ($routeParams,$location, ArticlesSvc) {

  self = this;


    self.edit = function( articleId) {

      ArticlesSvc.getArticle(articleId)
        .then(function (article_) {
          self.article = article_;
        });
      }

    self.update = function() {

      ArticlesSvc.updateArticle(self.article)
        .then( function(article_) {
          $location.path("/articles");
        })
        .catch(function(error){
          self.error = error;
        });
    }



    self.delete = function(article) {

      ArticlesSvc.deleteArticle(article)
        .then( function(article_) {
          $location.path("/articles");
        })
        .catch(function(error){
          self.error = error;
        });
    }




    self.article = {};
    self.edit( $routeParams.id )


  });
