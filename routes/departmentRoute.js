var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Departamento = require('../models/DepartamentoModel');

/* GET bloque listing. */
router.get('/', function(req, res, next) {
	Departamento.findDeparment(function(response){
		res.send(response);
	});
});

//SAVE:Ruta que invoca el m&eacute;todo para almacenar un departamento en la base de datos
router.post('/save', function(req, res, next){
	var nameDepartment = req.param('name');
	var idUnidad = req.param('id');
	Departamento.saveDepartment(nameDepartment,idUnidad, function(response){
		res.send(response);	
	});
	
});

//UPDATE:Ruta que invoca el m&eacute;todo para actualizar un departamento en la base de datos
router.post('/update', function(req, res, next){
	var idDepartment = req.param('departmentId');
	var departmentName = req.param('name');
	var unidadId = req.param('idUnidad');

	Departamento.updateDepartment(idDepartment, departmentName, unidadId, function(response){
		res.send(response);
	});
	
});

//DELETE:Ruta que invoca el m&eacute;todo para eliminar un bloque de la Base de datos
router.delete('/:id_department', function(req, res, next){
	var idDepartment = req.params['id_department'];
	Departamento.deleteDepartment(idDepartment, function(response){
		res.send(response);
	});
});

module.exports = router;