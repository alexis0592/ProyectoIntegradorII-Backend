var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tipoUnidadSchema = new mongoose.Schema({
	tipo_unidad:{
		nombre: String
	}
});

var tipoUnidadModel = mongoose.model('TipoUnidad', tipoUnidadSchema);
