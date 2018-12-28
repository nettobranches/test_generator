var express = require('express');
var router = express.Router();

var mFisica = require('../models/fisica.model');

/* GET users listing. */
router.get('/fisica/:unidad', function(req, res, next) {
  console.log('params:', req.params);
  var unidad = req.params.unidad;
  console.log( "preguntas"+ mFisica.getUnidad(unidad));
  res.send('examen');
});

module.exports = router;
