/*
Control de flujo
*/

// Estructura if
let llueve = true;
if (llueve){
    console.log("Está lloviendo");
} else{
    console.log("Esta todo seco");
}
// otro ejemplo
let admin = 'administrador';
if(admin ===  'administrador'){
    console.log('Bienvenido al sistema');
} else{
    console.log('Ingrese correctamente');
}

// otro ejemplo
const mayorDeEdad = 18;
let edadPersona = 20;

if (edadPersona >= mayorDeEdad){
    console.log('Es mayor de edad');
} else{
    console.log('Es menor');
}


// otro ejemplo
let semaforo = 'rojo';
if (semaforo === 'rojo'){
    console.log('Detener el auto');
} else if(semaforo === 'amarillo'){
    console.log('Disminuir velocidad');
} else if (semaforo === 'verde') {
    console.log('Avanzar');
} else{
    console.log('No corresponde ese color al semáforo');
}

/* SWITCH
no ayuda a evaluar una expresion y si alguno de esos casos es valido se ejectura
podemos tener multiples casos en switch
*/
switch (expresion) {
    case expresion:
        //codigo
        break; //si no estuviera el break, evalua el caso, y no se detendria
    case expresion:
        //codigo
        break; //palabra reservada  
    default:
        break;
}

// ejemplo

let producto = 'naranjas';

switch (producto) {
    case 'papaya':
        console.log('1 dolar');
        break;
    case 'queso':
        console.log('3 dolares');
        break;
    case 'naranjas':
        console.log('6 dolares');
        break;
    default:
        console.log('No existe el producto');
}
