var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bloqueSchema = new mongoose.Schema({
	numero_bloque :  String
});

var BloqueModel = mongoose.model('Bloque', bloqueSchema);

var b1 = new BloqueModel({
	bloque : {numero_bloque : '1'}
});

exports.saveBloque = function(numBloque){
	var bloqueToSave = new BloqueModel({
		bloque: numBloque
	});

	bloqueToSave.save(function(err){
		if(!err){
			console.log('Se guardo el Bloque Exitosamente');
		}
	});
}

/*
b1.save(function (err){
	if (!err) {
		console.log('Guardo el dato exitosamente');
	};
});*/

exports.findBloque = function(callback){
	bloqueModel.find({'bloque.numero_bloque': '1'}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}
