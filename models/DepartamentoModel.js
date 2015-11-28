var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Unidad = mongoose.model('UnidadModel');

var departamentoSchema = new mongoose.Schema({
	nombre: String,
	id_unidad : {type:Schema.ObjectId, ref:'Unidad'}
});

var Departamento = mongoose.model('Departamento', departamentoSchema);