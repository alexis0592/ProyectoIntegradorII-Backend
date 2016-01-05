var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//url de conexión con la Base de Datos
var URI_STRING_BD = 'mongodb://localhost/test'

//var URI_STRING_BD = 'mongodb://ubicame:ubicame@ds035674.mongolab.com:35674/heroku_5325wfzs'


mongoose.connect(URI_STRING_BD, function(err, res){

  if(err){
    console.log('Error al conectarse con la BD Mongo');
  }else{
    console.log('Se conecto exitosamente a la Base de datos ' + URI_STRING_BD);
  }

});

var models = require('./models/BloqueModel');
var routes = require('./routes/index');
var users = require('./routes/users');
var bloques = require('./routes/bloques');
var tipoUnidad = require('./routes/tipoUnidad');
var unidadRoute = require('./routes/unidadRoute');
var routeDepartment = require('./routes/departmentRoute');
var ubicationRoute = require('./routes/ubicationRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/bloques', bloques);
app.use('/tipounidad', tipoUnidad);
app.use('/departamento', routeDepartment);
app.use('/unidad', unidadRoute);
app.use('/ubicacion', ubicationRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
