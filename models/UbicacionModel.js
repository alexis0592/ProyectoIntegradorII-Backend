var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Bloque = mongoose.model('BloqueModel');
var Departamento = mongoose.model('DepartamentoModel');
var Unidad = mongoose.model('UnidadModel');

var ubicacionSchema = new mongoose.Schema({
	bloque_id: {type: mongoose.Schema.ObjectId, ref:'Bloque'},
	oficina: String,
	latitud: Number,
	longitud:Number,
	departamento_id: {type: mongoose.Schema.ObjectId, ref: 'Departamento'},
	unidad_id: {type: mongoose.Schema.ObjectId, ref: 'Unidad'}
},{
	versionKey: false
});

var Ubicacion = mongoose.model('Ubicacion', ubicacionSchema);

exports.saveUbicacion = function(idBloque, office, lat, lng, idDepartment, idUnit){
	var ubicacionToSave = new Ubicacion({
		bloque_id: {_id:idBloque},
		oficina: office,
		latitud: lat,
		longitud:lng,
		departamento_id:{_id:idDepartment},
		unidad_id:{_id:idUnit}
	});

	ubicacionToSave.save(function(err){
		if(!err){
			console.log('Se guardo la Ubicacion Exitosamente');
		}
	});
}

exports.findUbicacion = function(callback){
	Ubicacion.find({})
	.populate('bloque_id')
	.populate('departamento_id')
	.populate('unidad_id')
	.exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			console.log(err);
		}
	});
}