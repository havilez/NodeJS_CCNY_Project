angular.module("my_app").controller('ArticlesNewController',function ($location ,$window, ArticlesNewSvc) {
  //  create data fields for article
  //  call service to post article to db
  //  return back to list of articles page

  self = this;



  this.addArticle = function(){
    ArticlesNewSvc.addArticle()
      .then( function(response){
        // go to articles page
        console.log( response );
        $location.redirect.path('/articles');
        $window.location.href = '/articles';
      })
      .catch(function (error) {
        self.error = error;
      });
  }





})
