var express = require('express');
var router = express.Router();
var bloqueModel = require('../models/BloqueModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
	bloqueModel.findBloque(function(response){
		res.send(response);
});
	});
  	

module.exports = router;
