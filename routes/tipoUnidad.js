var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var modelTipoUnidad = require('../models/TipoUnidadModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
	modelTipoUnidad.findTipoUnidad(function(response){
		res.send(response);
	});
});

/*Guardar un tipo de unidad*/
router.post('/save', function(req, res){
	var tipoUnidadName = req.param('name');
	modelTipoUnidad.saveTipoUnidad(tipoUnidadName);
	res.send("Exito");
});

//DELETE:Ruta que invoca el m&eacute;todo para eliminar un bloque de la Base de datos
router.delete('/:idtipounidad', function(req, res, next){
	var idTipoUnidad = req.params['id'];
	modelTipoUnidad.deleteTipoUnidad(idTipoUnidad, function(response){
		res.send(response);
	});
});

module.exports = router;