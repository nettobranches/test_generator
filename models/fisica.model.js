var unidad_i = [
    {pregunta: "Un campo mide %d m de largo y %d m de ancho ¿Cuáles son la longitud y el ancho del campo en pies?",
    datos: {
        original: [100, 60]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "convertMtoFt"
    },
    {pregunta: "Un motor Nissan tiene %d cm3 de cilindrada y un diámetro interior de %d mm. Exprese estas medidas en pulgadas cúbicas y en pulgada",
    datos: {
        original: [1600, 84]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "convertCm3toInch3"
    },
    {pregunta: "La densidad del bronce es de %d g/cm3. ¿Cuál es su densidad en kilogramos por metro cúbico?",
    datos: {
        original: [8.89 ]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "convertGcm3toKmm3"
    },
    {pregunta: "Una mujer camina %d km hacia el Este y después camina %d km hacia el Norte. Encuentre el desplazamiento resultante ",
    datos: {
        original: [7, 5]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "convertMtoFt"
    },
    {pregunta: "En la superficie de Marte, un vehículo se desplaza una distancia de %d m a un ángulo de %d°. Después vira y recorre una distancia de %d m a un ángulo de %d°. ¿Cuál fue su desplazamiento desde el punto de partida? ",
    datos: {
        original: [24, 180, 66, 40]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "convertMtoFt"
    },
    {pregunta: "Dos cuerdas Ay B están atadas a un gancho de amarre, de manera que se ha formado un ángulo de %d° entre las dos cuerdas. La tensión sobre la cuerda A es de %d N y la tensión sobre la cuerda B es de %d N. Encuentre la fuerza resultante sobre el gancho. ",
    datos: {
        original: [60, 10, 51 ]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "convertMtoFt"
    },
    {pregunta: "Halle las componentes x y y de (a) un desplazamien¬to de %d km a %d°, (b) una velocidad de %d km/h a %d° y (c) una fuerza de %d N a %d°. ",
    datos: {
        original: [186, 80, 997, 229, 425, 303]
        // random: [ Math.randomInt(200, 600), Math.randomInt(60, 180)]
        },
    method: "convertMtoFt"
    },
];

 module.exports = {
   "i": unidad_i
 };
