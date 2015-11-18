var express = require('express'),
  router = express.Router(),
  config = require('../../config/passport-config'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');


module.exports = function (app) {
  app.use('/sessions', router);
};

router.post('/sessions', function (req, res, next) {
  // search for previously registered user by username
  var username = req.body.username;

  User.findOne({username: username})
    .select('password')
    .exec(function (err, user) {
      if (err) { return next(err) }
      if (!user) { return res.sendStatus(401) }

      //  validate user by checking password
      bcrypt.compare(req.body.password, user.password, function (err, valid) {
        if (err) { return next(err) }
        if (!valid) { return res.sendStatus(401) }
        var token = jwt.encode({username: username}, config.secret)
        res.send(token)
      })
    })
})


