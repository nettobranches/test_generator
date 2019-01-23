var unidad_i = [
    {pregunta: "\\( \\int{%s dx} \\)",
    operacion: ["x^2"],
    datos: {
        original: ["x^2"]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar"
    },
	{pregunta: "\\( \\int{%s } \\)",
   operacion: ["dx \\over \\sqrt{1-x}" ],
    datos: {
        original: ["dx \\over \\sqrt{1-x}" ,"1/sqrt(1-x)"]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar"
    },
	{pregunta: "\\( \\int{%s} \\)",
   operacion: ["dx \\over x^2" ],
    datos: {
        original: ["dx \\over x^2" ,"1/x^2"]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar"
    },
	{pregunta: "\\( \\int{%s } \\)",
   operacion: ["dx \\over \\sqrt{a*x}" ],
    datos: {
        original: ["dx \\over \\sqrt{a*x}" ,"1/sqrt(a*x)"]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar"
    },
	{pregunta: "\\( \\int{ %s dx \\over \\sqrt{%s} } \\)",
   operacion: ["x^2", "x^3 - 1" ],
    datos: {
        original: ["x^2", "x^3 - 1", "-1/2" ],
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar_a"
    },
    {pregunta: "\\( \\int{%s dx} \\)",
    operacion: [" x \\sqrt{ax^2 + b}"],
      datos: {
          original: [" x * \\sqrt{ax^2 + b}" ,"x * sqrt(ax^2 + b)"]
          // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
          },
      method: "integrar"
      },
      {pregunta: "\\( \\int{%s dx} \\)",
      operacion: ["x*(1+2x^2)^2"],
      datos: {
      original: ["x*(1+2x^2)^2"]
      // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
      },
      method: "integrar"
      },
      {pregunta: "\\( \\int{%s dx} \\)",
      operacion: ["x^2"],
      datos: {
      original: ["x^2"]
      // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
      },
      method: "integrar"
      },

];

 module.exports = {
   "i": unidad_i
 };
