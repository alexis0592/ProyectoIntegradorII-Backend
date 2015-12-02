var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Bloque = mongoose.model('BloqueModel');
var Departamento = mongoose.model('DepartamentoModel');
var Unidad = mongoose.model('UnidadModel');

var ubicacionSchema = new mongoose.Schema({
	bloque_id: {type: mongoose.Schema.ObjectId, ref:'BloqueModel'},
	oficina: String,
	latitud: Number,
	longitud:Number,
	departamento_id: {type: mongoose.Schema.ObjectId, ref: 'DepartamentoModel'},
	unidad_id: {type: mongoose.Schema.ObjectId, ref: 'UnidadModel'}
});

var Ubicacion = mongoose.model('Ubicacion', ubicacionSchema);