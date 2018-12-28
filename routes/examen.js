var express = require('express');
var router = express.Router();

var mFisica = require('../models/fisica.model');
var examenController = require('../controllers/examen.controller');


/* GET users listing. */
router.get('/fisica/:unidad/:n_preguntas/:n_versiones/:n_personas', examenController.examenFisica);

/* GET home page. */
router.get('/', function(req, res, next) {
  var preguntas = [{pregunta: "pregunta", respuesta:"respuesta"}]
  res.render('examen', { materia: 'materia', unidad: 'unidad x', grupos: "grupos", preguntas: preguntas });
});

module.exports = router;
