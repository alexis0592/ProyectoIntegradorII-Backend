var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ubicame UdeA' });
});

router.get('/user', function(req, res, next){
	res.send('Hello World');
});

module.exports = router;
