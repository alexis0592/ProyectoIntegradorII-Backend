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

//Ruta que invoca el m&eacute;todo para almacenar un bloque en la base de datos
router.post('/save', function(req, res, next){
	var numBloq = req.param('numero');
	Bloque.saveBloque(numBloq);
	res.send('Exito');
});

//Ruta que invoca el m&eacute;todo para actualizar un bloque en la base de datos
router.post('/update', function(req, res, next){
	var idBloq = req.param('bloqueId');
	var bloqNum = req.param('numBloque');

	Bloque.updateBloque(idBloq, bloqNum, function(response){
		res.send(response);
	});
	
});

//Ruta que invoca el m&eacute;todo para eliminar un bloque de la Base de datos
router.delete('/delete/:idbloque', function(req, res, next){
	var idBloq = req.params['idbloque'];
	Bloque.deleteBloque(idBloq, function(response){
		res.send(response);
	});
});

module.exports = router;