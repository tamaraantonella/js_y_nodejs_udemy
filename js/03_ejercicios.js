/* Ejercicios Operadores.

1. Escribir un programa que calcule el número de segundos que existen en un día.
Para ello debemos multiplicar los segundos de un minuto, por los minutos de
una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.*/

let segundos = (60*60*24);
console.log(segundos);


/* 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,
calcule el área de un rectángulo.*/
let ancho = 2;
let alto = 5;
let areaRectangulo = ancho * alto;
console.log(areaRectangulo);

/*3. Hacer un conversor de grados centígrados a grados Fahrenheit.
Para ello deberé multiplicar por 9/5 y sumar 32.
Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.*/
let grados = 20;
let conversor = grados * 9/5 + 32;
console.log(conversor);