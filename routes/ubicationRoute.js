var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ubication = require('../models/UbicacionModel');

/* GET ubicacion listing. */
router.get('/', function(req, res, next) {
	ubication.findUbicacion(function(response){
		res.send(response);
	});
});

router.post('/save', function(req, res, next) {
	var idBloque = req.param('idBloque');
	var office = req.param('oficina');
	var lat = req.param('lat');
	var lng = req.param('lng');
	var idDepartment = req.param('departamentoId');
	var idUnidad = req.param('unidadId');

	modelUnidad.saveUnidad(name, tipoUnidadId);
	res.send('Exito');
});