var express = require('express');
var router = express.Router();

var mFisica = require('../models/fisica.model');
var examenController = require('../controllers/examen.controller');


/* GET users listing. */
router.get('/fisica/:unidad/:n_preguntas/:is_random', examenController.examenFisica);
router.get('/electro/:unidad/:n_preguntas/:is_random', examenController.examenElectromagnetismo);
router.get('/calculo/:unidad/:n_preguntas/:is_random', examenController.examenCalculo);
router.get('/:id', examenController.getById);

/* GET home page. */
router.get('/', function(req, res, next) {
  var preguntas = [{pregunta: "pregunta", respuesta:"respuesta"}]
  res.render('examen', { materia: 'materia', unidad: 'unidad x', grupos: "grupos", preguntas: preguntas });
});

module.exports = router;
