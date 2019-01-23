var express = require('express');
var router = express.Router();

var util = require('util');
var math = require('mathjs');
math.import(require('mathjs-simple-integral'));

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
  pitagoras: function(arrData){
    var a = arrData[0];
    var b = arrData[1];
    var suma = Math.pow( a,2)+ Math.pow(b,2 );
    console.log(suma)
    return Number((Math.sqrt( suma )).toFixed(2));
  },
  getComponentesXY: function(arrData){
    var res = "";
    for( i=1; i < arrData.length; i+=2){
      console.log("arrData", i, arrData[i-1], arrData[i])
      res += this.componenteX(arrData[i-1], arrData[i]) + ", " + this.componenteY(arrData[i-1], arrData[i]);
    }
    return res;
  },
  componenteX: function(d, a){ //distancia, angulo
    d = this.dirRX(a) * d;
    a = this.convertAng(a);
    // console.log('a', a);
    a = math.unit(a, 'deg');
    var comp_x = d * math.cos(a);
    console.log(d,'* cos', math.cos(a), comp_x)
    return Number(comp_x).toFixed(2);
  },
  componenteY: function(d, a){ //distancia, angulo
    d = this.dirRY(a) * d;
    a = this.convertAng(a);
    // console.log('a', a);
    a = math.unit(a, 'deg');
    var comp_y = d * math.sin(a);
    console.log(d,'* sin', math.sin(a), comp_y)
    return Number(comp_y).toFixed(2);
  },
  convertAng: function(a){
      r = a;
      if( a >270  ){
        r = 360 - a;
      }else if( a > 180){
        r = 180 - a
      }
      else if( a > 90){
        r = 180 - a
      }
      return r
  },
  dirRX: function(a){
      r = 1;
      if( a >90 && a < 270  ){
        r = -1;
      }
      return r
  },
  dirRY: function(a){
    r = 1;
    if( a > 180  ){
      r = -1;
    }
      return r
  },
  integrar: function(arrData){
	  var solveEq = "";
	  if(arrData.length == 2){
		  solveEq = arrData[1];
	  }else{
		  solveEq = arrData[0];
	  }
	  var rawRes = math.integral(solveEq, 'x', {simplify: false}).toString();
	  console.log('res', rawRes );
	  var simplified = math.simplify( rawRes ).toString();
	  console.log('simplified', simplified);
	  var txtRes = "";
    simplified = simplified.replace("/", "\\over")
    simplified = simplified.replace("sqrt", "\\sqrt")
    // simplified = simplified.replace("(", "{")
    // simplified = simplified.replace(")", "}")
    return "\\(" + simplified + "\\)";
  },
  integrar_a: function(arrData){
    // var dx =
    var fx = arrData[1]
    var exp = arrData[2]
    var dx = math.derivative( fx, "x" ).toString();
    var simplified = math.simplify("("+ fx + ")^(" + exp + ")" ).toString();
      return "\\(" + simplified + "\\)";
  }
}
