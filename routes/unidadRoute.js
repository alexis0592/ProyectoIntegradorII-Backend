var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var modelUnidad = require('../models/UnidadModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
	modelUnidad.findUnidad(function(response){
		res.send(response);
	});
});

router.post('/save', function(req, res, next) {
	var name = req.param('name');
	var tipoUnidadId = req.param('tipoUnidadId');

	modelUnidad.saveUnidad(name, tipoUnidadId,function(response){
		res.send(response);	
	});
	
});

router.get('/:tipo', function(req, res, next) {
	var idTipo = req.params['tipo']

	modelUnidad.findUnidadByTipo(idTipo ,function(response){
		res.send(response);	
	});
	
});

module.exports = router;