var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tipoUnidadModel = require('./TipoUnidadModel')

var unidadSchema = new mongoose.Schema({
	nombre: String,
	tipoUnidad: {type: tipoUnidadModel, ref: 'TipoUnidadModel'}
});

var unidadModel = mongoose.model('Unidad', unidadSchema);

var unidad = new unidadModel({
	nombre: 'Corporación Ambiental',
	tipoUnidad: 'Acádemica'
});

unidad.save(function (err){
	if (!err) {
		console.log('Guardo el dato exitosamente');
	};
});

exports.findUnidad = function(callback){
	unidadModel.find({}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}