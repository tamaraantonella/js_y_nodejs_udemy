/**
 * FILTER - REDUCE - SOME
 * 
 */


// FILTER
/* no modifica el arreglo de origen
 * nos deja filtrar elementos en base a una condicion que devuelve valor logico
 * 
 */

var estudiantes = [
    {nombre: 'Ada', edad: 23, matriculado: true},
    {nombre: 'Laura', edad: 25, matriculado: false},
    {nombre: 'Hector', edad: 28, matriculado: true},
    {nombre: 'Veronica', edad: 25, matriculado: false},
    {nombre: 'Javier', edad: 20, matriculado: true}
];

// nos solicitan listado de estudiantes mayores de 21 años

var filtradoEdad = estudiantes.filter((estudiante) => estudiante.edad >= 25);
console.log(filtradoEdad);

// Hacemos un condicional mas complejo, los que esten matriculado y de mayor o igual a 25 años

var filtradoEdad = estudiantes.filter((estudiante) => estudiante.edad >= 25 && estudiante.matriculado);
console.log(filtradoEdad);


// REDUCE
// Reduce nuestro array a un solo valor.

var calificaciones = [2, 5, 8, 6, 9, 7];

var suma = calificaciones.reduce((acumulad, calificacion) => acumulad + calificacion, 0); // ese 0 es del estado inicial
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);


// otro ejemplo

var edades = [21, 23, 25, 21, 56, 21, 16, 23, 23, 45];
var resultado = edades.reduce((acumulador, edad) => {
    //si no existe la edad 1 que la cree, y si la tiene, que sume 1
    if (!acumulador[edad]) {
        acumulador[edad] = 1
    } else{
        acumulador[edad] += 1
    }
    return acumulador
}, {})

console.log(edades);
console.log(resultado);

// SOME -- EVERY

var numeros = [1,2,3,4,5,6,7,8,9,10];
// si alguno de los elementos verifica la condicion, nos retorna verdadero
var result = numeros.some ((numero) => numero % 2 === 0 );
console.log(result);

// EVERY
// nos retorna true o false si todos los elementos del array cumplen la condicion

var result2 = numeros.every ((numero) => numero % 2 === 0 );
console.log(result2);
// da false, porque no todos los numeros del array cumplen con esa condicion

