var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tipoUnidadModel = require('./TipoUnidadModel')

var unidadSchema = new mongoose.Schema({
	nombre: String,
	tipoUnidad: {type: Schema.ObjectId, ref: 'TipoUnidadModel'}
});

var UnidadModel = mongoose.model('Unidad', unidadSchema);

var unidad = new UnidadModel({
	nombre: 'Departamento Ingeniería'
});

/*unidad.save(function (err){
	if (!err) {
		console.log('Guardo la unidad el dato exitosamente');
	}else{
		console.log('Jodido');
	};
});*/

exports.findUnidad = function(callback){
	UnidadModel.find({}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}