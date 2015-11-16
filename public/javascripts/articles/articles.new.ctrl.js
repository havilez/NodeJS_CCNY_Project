angular.module("my_app").controller('ArticlesNewController',function ($location ,ArticlesSvc) {
  //  create data fields for article
  //  call service to post article to db
  //  return back to list of articles page

  self = this;

  self.article = {
  };



  self.addArticle = function(){

    ArticlesSvc.save(self.article)
      .then( function(article_){
        // go to articles page
        console.log( article_ );
        $location.path('/articles');

      })
      .catch(function (error) {
        self.error = error;
      });
  }



})
