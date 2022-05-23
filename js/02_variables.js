// Variables Var
// almacenamos un dato en un espacio de memoria
var variable = 5;

// definimos e inicializamos la variable con objetos
var persona = {
    nombre : 'Tamara',
    edad: 28,
    ciudadesVisitadas: [
        'Lima',
        'Buenos Aires',
        'Monterrey'
    ]
}

// Variables Let
// uso llaves para armar un bloque de código
{
    let saludo = 'Hola soy Tamara';
    console.log(saludo);
}
// saludo fue declarada con let, que solo tiene validez dentro del bloque de codigo.
console.log(saludo);

// Template strings nos permite meter variables dentro de otras `` y hasta permite salto de linea.
var nombre = 'Tamara';
var saludo = `Hola soy ${nombre}
Como estas?`;

console.log(saludo);


