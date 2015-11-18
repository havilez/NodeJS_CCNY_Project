var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/articles', router);
};

var auth =require('../../config/auth');

router.use( auth );

router.get('/', function (req, res, next) {
  // get all articles for a given user

  if ("auth" in req ) {

    Article.find({username: req.auth.username})
      .exec(function (err, articles) {
        if (err) return next(err);
        res.send({
          title: 'Articles Page',
          articles: articles
        });

        /**
         res.render('article/index', {
      title: 'Articles Page',
      articles: articles
    });
         **/
      });

  }
});

router.get('/new', function (req, res, next) {
    res.render('article/new', { title: 'Create New Article' });

});

router.get('/show/:id', function(req,res, next) {
    Article.findById(req.params.id, function (err, article) {
      if (err) return next(err);
      res.render('article/show', {
        title: 'Article Page',
        article: article
    });
  });
});

router.post('/update', function(req,res, next) {
  Article.findOneAndUpdate({'_id': req.body._id},
      { title: req.body.title, url: req.body.url, text: req.body.text }
      , function (err, article) {
        console.log(err);
      if (err) return next(err);
      res.send(article);
  });
});

router.get('/edit/:id', function (req, res, next) {
    Article.findById(req.params.id, function (err, article) {
      if (err) return next(err);
      res.send(article);

      /*
      res.render('article/edit', {
        title: 'Article Edit Page',
        article: article
    });
    */
  });
});

router.get('/delete/:id', function(req,res, next) {
  Article.remove({_id: req.params.id}, function (err) {
      if (err) return next(err);

        res.redirect('/articles');
  });
});

router.post('/create', function (req, res, next) {
  var article = new Article({ username:req.auth.username ,title: req.body.title, url: req.body.url, text: req.body.text });
  article.save(function (err, article) {
    if (err) return next(err);
    console.log(article);
      res.send(article);
  });
   // res.redirect('/articles');
});
