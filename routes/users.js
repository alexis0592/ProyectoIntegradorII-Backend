var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bloqueModel1 = require('../models/BloqueModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
	bloqueModel1.findBloque(function(response){
		res.send(response);
	});
});

exports.findBloque = function(callback){
	bloqueModel1.bloqueModel.find({'bloque.numero_bloque': '1'}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}

module.exports = router;
