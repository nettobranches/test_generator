var express = require('express');
var router = express.Router();

var util = require('util');
var math = require('mathjs');


module.exports = {
  convertMtoFt: function(arrData){

    var a = math.unit(arrData[0], 'm');
    return a.to("ft");

  },
  integrar: function(arrData){
    return "\\(" + math.derivative(arrData[0], 'x').toString() + "\\)";
  }
}
