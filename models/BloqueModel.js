var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bloqueSchema = new mongoose.Schema({
	numero_bloque :  String
},{
	versionKey: false
});

//Variable que representa el esquema Bloque en Mongoose
var BloqueModel = mongoose.model('Bloque', bloqueSchema);

//Metodo para almacenar un bloque en la base de datos
//numBloque: numero de bloque a almacenar
exports.saveBloque = function(numBloque, callback){
	var bloqueToSave = new BloqueModel({
		numero_bloque: numBloque
	});

	if(numBloque != ''){
		bloqueToSave.save(function(err){
			if(!err){
				callback('Success');
			}
		});
	}else{
		callback('Failure');
	}
	
}

exports.updateBloque = function(bloqueId, numBloqueToUpdate, callback){
	BloqueModel.findById(bloqueId, function(err, bloque){
		if(err) throw err;

		bloque.numero_bloque = numBloqueToUpdate;

		bloque.save(function(err){
			if(err) throw err;
			callback('Exito');
		})
	});
}

//Metodo para buscar todos los bloques existentes en la Base de Datos
exports.findBloque = function(callback){
	BloqueModel.find({}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			callback(err);
		}
	});
}

exports.deleteBloque = function(idBloque, callback){

	BloqueModel.findById(idBloque, function(err, bloque){
		if(err) throw err;

		bloque.remove(function(err){
			if(err) throw err;
			callback('Exito');
		});
	});
}
