angular.module("my_app").controller('ArticlesDetailController',function ($routeParams, ArticlesSvc) {
  //  create data fields for article
  //  call service to post article to db
  //  return back to list of articles page

  self = this;

  self.article = {
  };


  ArticlesSvc.getArticle($routeParams.id)
    .then(function(article_){
      self.article = article_;
    });


})
