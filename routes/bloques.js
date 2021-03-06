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

//SAVE:Ruta que invoca el m&eacute;todo para almacenar un bloque en la base de datos
router.post('/:numero', function(req, res, next){
	//var numBloq = req.param['numero'];
	var numBloq = req.params.numero;
	Bloque.saveBloque(numBloq, function(response){
		res.send(response);	
	});
	
});

//UPDATE:Ruta que invoca el m&eacute;todo para actualizar un bloque en la base de datos
router.put('/:bloqueId/:numBloque', function(req, res, next){
	var idBloq = req.params.bloqueId;
	var bloqNum = req.params.numBloque;

	Bloque.updateBloque(idBloq, bloqNum, function(response){
		res.send(response);
	});
	
});

//DELETE:Ruta que invoca el m&eacute;todo para eliminar un bloque de la Base de datos
router.delete('/:idbloque', function(req, res, next){
	var idBloq = req.params.idbloque;
	Bloque.deleteBloque(idBloq, function(response){
		res.send(response);
	});
});

module.exports = router;