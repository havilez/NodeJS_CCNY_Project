var express = require('express'),
  router = express.Router(),
  config = require('../../config/passport-config'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/users', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
  var auth = jwt.decode(req.headers['x-auth'], config.secret)
  User.findOne({username: auth.username}, function (err, user) {
    if (err) { return next(err) }
    res.json(user)
  })
})

// adding new user to db, username text and encrpted password
router.post('/users', function (req, res, next) {
  var user = new User({username: req.body.username});

  user.save(function (err,_user) {
    if (err) { return next(err) }
    res.sendStatus(201)
  });

  /**
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) { return next(err) }
    user.password = hash
    user.save(function (err,_user) {
      if (err) { return next(err) }
      res.sendStatus(201)
    })
  })

  **/
})


