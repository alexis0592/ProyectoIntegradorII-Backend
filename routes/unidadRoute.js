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

module.exports = router;