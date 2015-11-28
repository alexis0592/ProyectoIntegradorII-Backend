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

//Función para buscar un bloque, pasarle parametro
exports.findBloque = function(callback){
	Bloque.bloqueModel.find({'bloque.numero_bloque': '1'}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}

module.exports = router;