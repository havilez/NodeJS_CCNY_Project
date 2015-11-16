angular.module("my_app")
  .controller('ArticlesEditController',function (ArticlesSvc) {

  self = this;


    self.artile = {
    };

    self.edit = function(articleId) {

      ArticlesSvc.getArticle(articleId)
        .then(function (article_) {
          self.article = article_;
        });
      }

    self.save = function() {

      ArticlesSvc.save(self.article)
        .then( function(article_) {
          $location.path("/articles");
        })
        .catch(function(error){
          $scope.error = error;
        });
    }

    self.edit( $routeParams.id )
  });
