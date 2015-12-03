var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bloqueSchema = new mongoose.Schema({
	numero_bloque :  String
},{
	versionKey: false
});

var BloqueModel = mongoose.model('Bloque', bloqueSchema);


exports.saveBloque = function(numBloque){
	var bloqueToSave = new BloqueModel({
		numero_bloque: numBloque
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
	BloqueModel.find({}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}
