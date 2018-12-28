var express = require('express');
var router = express.Router();

var util = require('util');
var math = require('mathjs');

var mFisica = require('../models/fisica.model');
var fisicaController = require('../controllers/fisica.controller');

function solve(arrData, method){
  return fisicaController[method](arrData);
}

function setPreguntaResOriginal(item){

    var pregunta = item.pregunta;
    item.datos.original.forEach(function(val){
      pregunta = util.format( pregunta, val );
    })

    var respuesta = solve(item.datos.original, item.method)

    arrPreguntas.push( {pregunta: pregunta, respuesta: respuesta} )
}
var arrPreguntas = [];

function examenFisica(req, res, next) {

  var materia = "fisica i";//req.params.materia;
  var grupos = "1°QFB, 1°QBT"
  var unidades = {
    "i": "unidad i",
    "ii": "unidad ii",
    "iii": "unidad iii",
    "o": "ordinario",
    "x": "extraordinario",
    "t": "titulo"
  };

  var unidad = unidades[req.params.unidad] || "";
  var nPreguntas = req.params.n_preguntas;
  var nVersiones = req.params.n_versiones;
  var nPersonas = req.params.n_personas;


  mFisica.forEach(setPreguntaResOriginal);

  res.render('examen', { materia: materia, unidad: unidad, grupos: grupos, preguntas: arrPreguntas });
};

function examenCalculo(req, res, next) {
  console.log('params:', req.params);

  var materia = "fisica i";//req.params.materia;
  var grupos = "1°QFB, 1°QBT"
  var unidades = {
    "1": "unidad i"
  };

  var unidad = unidades[req.params.unidad] || "";
  var nPreguntas = req.params.n_preguntas;
  var nVersiones = req.params.n_versiones;
  var nPersonas = req.params.n_personas;


  mFisica.forEach(setPregunta);

  res.render('examen', { materia: materia, unidad: unidad, grupos: grupos, preguntas: arrPreguntas });
};

function examenElectromagnetismo(req, res, next) {
  console.log('params:', req.params);

  var materia = "fisica i";//req.params.materia;
  var grupos = "1°QFB, 1°QBT"
  var unidades = {
    "1": "unidad i"
  };

  var unidad = unidades[req.params.unidad] || "";
  var nPreguntas = req.params.n_preguntas;
  var nVersiones = req.params.n_versiones;
  var nPersonas = req.params.n_personas;


  mFisica.forEach(setPregunta);

  res.render('examen', { materia: materia, unidad: unidad, grupos: grupos, preguntas: arrPreguntas });
};

module.exports = {
  examenFisica: examenFisica,
  examenCalculo: examenCalculo,
  examenElectromagnetismo: examenElectromagnetismo,
}
