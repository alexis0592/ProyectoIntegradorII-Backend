var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tipoUnidadSchema = new mongoose.Schema({
	nombre: String
},{
	versionKey: false
});

var tipoUnidadModel = mongoose.model('TipoUnidad', tipoUnidadSchema);

//Funcipon para guardar un tipo de unidad en la base de datos
//Recibe el nombre del tipo de unidad a guardar
exports.saveTipoUnidad = function(tipoUnidad){
	var tipoUnidadToSave = new tipoUnidadModel({
		nombre: tipoUnidad
	});

	tipoUnidadToSave.save(function(err){
		if(!err){
			console.log('Se guardo el datos TipoUnidad Exitosamente');
		}
	});
}

//Funcion para retornar todas los tipos de unidad existentes en la BD
exports.findTipoUnidad = function(callback){
	tipoUnidadModel.find({}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}
