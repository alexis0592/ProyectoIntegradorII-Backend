var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tipoUnidadModel = require('./TipoUnidadModel')

var unidadSchema = new mongoose.Schema({
	nombre: String,
	tipoUnidad: {type: mongoose.Schema.ObjectId, ref: 'TipoUnidad'}
},{
	versionKey: false
});

//Variable que representa el esquema Unidad en Mongoose
var UnidadModel = mongoose.model('Unidad', unidadSchema);

//Metodo para guardar una unidad en la base de datos
exports.saveUnidad = function(name, tipoUnidadId, callback){
	var unidadToSave = new UnidadModel({
		nombre: name,
		tipoUnidad:{_id:tipoUnidadId}
	});

	unidadToSave.save(function(err){
		if(!err){
			console.log('Se guardo el dato Unidad Exitosamente');
			callback('Exito desde el modelo');
		}
	});
}

//Metodo para encontrar todas las unidades existentes en la Base de Datos
exports.findUnidad = function(callback){
	UnidadModel.find({}).populate('tipoUnidad').exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}

//Metodo para encontrar todas las unidades, dado el tipo de Unidad 
exports.findUnidadByTipo = function(idTipo, callback){
	UnidadModel.find({tipoUnidad:idTipo}).populate('tipoUnidad').exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			callback(err);
		}
	})
}

