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

module.exports = router;