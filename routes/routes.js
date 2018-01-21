var express = require('express');
var router = express.Router();
var apiCtrl = require('./../controllers/api');


router.get('/tweets', apiCtrl.getTweets);
router.get('/movies', apiCtrl.getMovies);
router.post('/getTweets/:tweet', apiCtrl.getSearch);

module.exports = router;