var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bloque = require('../models/BloqueModel')

/* GET bloque listing. */
router.get('/', function(req, res, next) {
	Bloque.findBloque(function(response){
		res.send(response);
	});
});

router.post('/save', function(req, res, next){
	var numBloq = req.param('numero');
	Bloque.saveBloque(numBloq);
	res.send('Exito');
})

module.exports = router;