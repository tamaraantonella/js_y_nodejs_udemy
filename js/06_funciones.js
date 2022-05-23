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
