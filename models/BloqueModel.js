var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bloqueSchema = new mongoose.Schema({
	bloque:{
		numero_bloque :  String
	}
});

var bloqueModel = mongoose.model('Bloque', bloqueSchema);


var b1 = new bloqueModel({
	bloque : {numero_bloque : '1'}
});

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
