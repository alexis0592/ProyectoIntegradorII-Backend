var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tipoUnidadSchema = new mongoose.Schema({
	nombre: String
});

var tipoUnidadModel = mongoose.model('TipoUnidad', tipoUnidadSchema);

var tipoUnidad = new tipoUnidadModel({
	nombre: 'Prueba'
});

/*tipoUnidad.save(function (err){
	if (!err) {
		console.log('Guardo el dato exitosamente');
	};
});*/

exports.findTipoUnidad = function(callback){
	tipoUnidadModel.find({}).exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}
