var unidad_i = [
    {pregunta: "$$ \\int{%s dx} $$",
    datos: {
        original: ["x^2"]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar"
    },
	{pregunta: "$$ \\int{%s } $$",
    datos: {
        original: ["dx \\over \\sqrt{x-1}" ,"1/sqrt(1-x)"]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar"
    },
	{pregunta: "$$ \\int{%s} $$",
    datos: {
        original: ["dx \\over x^2" ,"1/x^2"]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar"
    },
	{pregunta: "$$ \\int{%s } $$",
    datos: {
        original: ["dx \\over \\sqrt{a*x}" ,"1/sqrt(a*x)"]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "integrar"
    },
	{pregunta: "$$ \\int{%s dx} $$",
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
