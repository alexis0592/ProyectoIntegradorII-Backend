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

module.exports = router;