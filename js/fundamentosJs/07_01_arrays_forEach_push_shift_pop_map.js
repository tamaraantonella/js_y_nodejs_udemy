/**
 * Manipulacion de arreglos
 */

var letras = ['a', 'b', 'c', 'd'];
for (let i = 0; i < letras.length; i++) {
    const element = letras[i];
    console.log(element);
}

// for Each recibe como parametro a otra funcion
letras.forEach((element) => {
    console.log(element);
});


/**
 * Otras funciones
 * push -- shift --pop
 */

// PUSH
let dias = ['Lunes', 'Martes', 'Miercoles'];
// vamos a pasarle a push, el elemento que queremos agregarle al arreglo.
dias.push('Jueves');
console.log(dias);

// SHIFT
// modifica el arreglo, y no se muestra la posicion 0.
let primerDia = dias.shift()
console.log(dias);
console.log(primerDia);

// POP
// Va a obtener el ultimo elemento del arreglo. no solo lo obtiene sino que lo elimina del arreglo.

let ultimoDia = dias.pop()
console.log(dias);
console.log(ultimoDia);

/**
 * 
 * ARREGLOS CON MAPS
 * map requiere una funcion 
 */ 

//map, es inmutable, no modifica el array original
var estudiantes = ['Tamara', 'Jesus', 'Ceci', 'Soledad'];

var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
})

console.log(estudiantes);
console.log(asistencia);

// ahora queremos que retorne el string de nombre y un punto al final

var cambio = estudiantes.map((nombre) => `${nombre}.`)
console.log(cambio);

// Otro ejemplo
var productos = [
    {nombre: 'camisetas', precio: 20 },
    {nombre: 'pantalon', precio: 30 },
    {nombre: 'remera', precio: 25 },
    {nombre: 'zapatos', precio: 30 }
];

var impuesto = productos.map((producto) => {
    // debemos siempre return en cada iteracion
    return {
        ...producto,
        impuesto: .12
    }
})
console.log(productos);
console.log(impuesto);

// si yo solo quiero un dato de los objetos del array
var precios = productos.map((producto) => producto.precio)
console.log(precios);