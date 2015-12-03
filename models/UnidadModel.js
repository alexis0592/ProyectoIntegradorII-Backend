var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tipoUnidadModel = require('./TipoUnidadModel')

var unidadSchema = new mongoose.Schema({
	nombre: String,
	tipoUnidad: {type: mongoose.Schema.ObjectId, ref: 'TipoUnidadModel'}
},{
	versionKey: false
});

var UnidadModel = mongoose.model('Unidad', unidadSchema);

exports.saveUnidad = function(name, tipoUnidadId){
	var unidadToSave = new UnidadModel({
		nombre: name,
		tipoUnidad:{_id:tipoUnidadId}
	});

	unidadToSave.save(function(err){
		if(!err){
			console.log('Se guardo el dato Unidad Exitosamente');
		}
	});
}

/*var unidad = new UnidadModel({
	nombre: 'Departamento Ingeniería'
	tipoUnidad: {nombre:'565a07e0b8e9761100050344'}
});*/

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