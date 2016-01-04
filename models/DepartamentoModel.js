var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Unidad = mongoose.model('Unidad');

var departamentoSchema = new mongoose.Schema({
	nombre: String,
	id_unidad : {type: mongoose.Schema.ObjectId, ref:'Unidad'}
},{
	versionKey: false
});
	
//Variable que representa el esquema Departamento en Mongoose
var DepartamentoModel = mongoose.model('Departamento', departamentoSchema);

//Metodo para almacenar un departamento en la base de datos
//numBloque: numero de bloque a almacenar
exports.saveDepartment = function(departmentName,idUnidad, callback){
	var departmentToSave = new DepartamentoModel({
		nombre: departmentName,
		id_unidad:{_id:idUnidad}
	});


	if((departmentName != '') && (idUnidad != '')){
		departmentToSave.save(function(err){
			if(!err){
				callback('Success');
			}
		});
	}else{
		callback('Failure');
	}
	
}

exports.updateDepartment = function(departmentId, departmentName, idUnidad, callback){
	DepartamentoModel.findById(departmentId, function(err, department){
		if(err) throw err;

		department.nombre = departmentName;
		department.id_unidad = idUnidad;

		department.save(function(err){
			if(err) throw err;
			callback('Success');
		});
	});
}

//Metodo para buscar todos los departamentos existentes en la Base de Datos
exports.findDeparment = function(callback){
	DepartamentoModel.find({}).populate('id_unidad').exec(function(err, result){
		if(!err){
			callback(result);
		}else{
			callback(err);
		}
	});
}

exports.deleteDepartment = function(idDepartment, callback){

	DepartamentoModel.findById(idDepartment, function(err, department){
		if(err) throw err;

		department.remove(function(err){
			if(err) throw err;
			callback('Success');
		});
	});
}