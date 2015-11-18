/**
 * Created by havilez on 11/18/15.
 */

var express = require('express'),
  router = express.Router();


console.log( 'loading index.js' );

var auth =require('../../config/auth');



/////////////////////////////
module.exports = function (app) {
  router.use(auth)
};


