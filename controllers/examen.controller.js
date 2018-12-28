var express = require('express');
var router = express.Router();

var util = require('util');
var math = require('mathjs');

var mFisica = require('../models/fisica.model');
var fisicaController = require('../controllers/fisica.controller');

function solve(arrData, method){
  return fisicaController[method](arrData);
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function setPreguntaResOriginal(item){

    var pregunta = item.pregunta;
    item.datos.original.forEach(function(val){
      pregunta = util.format( pregunta, val );
    })

    var respuesta = solve(item.datos.original, item.method)

    arrPreguntas.push( {pregunta: pregunta, respuesta: respuesta} )
}
var arrPreguntas;

function examenFisica(req, res, next) {

  var id = dec2bin(3);
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
  var nPreguntas = 7;//req.params.n_preguntas || mFisica[req.params.unidad].length;
  var random = true;

  var nVersiones = req.params.n_versiones;
  var nPersonas = req.params.n_personas;

  var items = mFisica[req.params.unidad].slice(0, nPreguntas);
  if(random){
    items = shuffle(items);
  }
  arrPreguntas = [];

  items.forEach(setPreguntaResOriginal);

  res.render('examen', { id:id, materia: materia, unidad: unidad, grupos: grupos, preguntas: arrPreguntas });
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
