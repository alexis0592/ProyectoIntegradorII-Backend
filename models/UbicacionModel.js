var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Bloque = mongoose.model('Bloque');
var Departamento = mongoose.model('Departamento');
var Unidad = mongoose.model('Unidad');

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

exports.saveUbicacion = function(idBloque, office, lat, lng, idDepartment, idUnit, callback){
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
			callback('Se guardo la Ubicacion Exitosamente');
		}else{
			callback('Failure');
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

exports.findUbicationByBloqAndOffice = function(bloq,offic,callback){
	Ubicacion.find({bloque_id:bloq, oficina:offic})
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