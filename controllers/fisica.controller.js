var express = require('express');
var router = express.Router();

var util = require('util');
var math = require('mathjs');


module.exports = {
  convertMtoFt: function(arrData){

    var a = math.unit(arrData[0], 'm');
    return a.to("ft");

  },
  convertCm3toInch3: function(arrData){
    var a = math.unit(arrData[0], 'cm^3');
    var b = math.unit(arrData[1], 'cm');

    return a.to("in^3")+" "+b.to("in");
  },
  convertGcm3toKmm3: function(arrData){
    var a = math.unit(arrData[0], 'g/cm^3');

    return a.to("kg/m^3");
  },
  integrar: function(arrData){
    return "\\(" + math.derivative(arrData[0], 'x').toString() + "\\)";
  }
}
