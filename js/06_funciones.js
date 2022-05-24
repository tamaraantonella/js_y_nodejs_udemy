// pueden ser guardadas en memoria y nombrarlas nuevamente
// Dos formas de escribir funciones

// 1. Declarativa

// function nombreFuncion (){
// // cuerpo de nuestra función
// }

// EJEMPLO1
function saludar() {
    console.log('hola soy un saludo');
}
// para ejecutarla la llamamos
saludar();

// OTRO EJEMPLO
function sayHello(x) {
    return `Hola como estas ${x} ?`;
}

let saludo = sayHello("tamara");
console.log(saludo);

// 2. de expresion o funciones anonimas

var suma = function (a, b) {
    return a + b;    
}

console.log(suma(4, 8));

// 2.1 funcion flecha o arrow, son mas limitadas
/**
var nombreFuncion = (a, b) => {
    return a -b;
}
 */

var resta = (a, b) => {
    return a - b;
}
console.log(resta(6, 2));


var revision = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a - b;
    }else{
        return 'solo puede ingresar numeros'
    }
}