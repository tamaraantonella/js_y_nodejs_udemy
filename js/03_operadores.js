/*
OPERADORES
*/

// Operadoradores de asignacion:
// Operador de asignacion
var x = 2;

// operador de asignacion de adicion, multiplicacion, division, resta
var y =3;
x += y;

console.log(x);

// operador de asignación de exponenciación ( **=)
x = x ** y;
// es lo mismo que
x **= y;

// Operadores de comparación
// operador igual (==) o (===), nos retorna un valor lógico.

console.log(3 == 3);

console.log(3 == '3'); //el numero es igual al string que contiene un numero. 

// para que sea iguales estrictamente (===)
console.log(3 === '3');

// operador no es igual, NOT. ( != ) el primer valor es distinto del segundo valor.
console.log(3 != '3');
console.log(3 !== '3'); //desigualdad estricta

/* 
OPERADORES ARITMETICOS 
*/

// operadores de incremento (++)
var numero = 0;
console.log(++numero); //primero suma y despues muestra en consola

// aca primero retorna el valor real y despues lo incrementa y lo establece en el siguiente.
console.log(numero++); //muestra en consola y despues suma.
console.log(numero);

// Operadores de decremento, son iguales nomas que cambia el signo.

/*
OPERADORES LOGICOS
*/

console.log(true && true);
console.log(2 > 3 && 1 < 6);
console.log(2 > 3 || 1 < 6);

/* 
OPERADOR DE Condicion

(condicion ? 'si es verdadero aparece esto' : 'Si es falsa aparece esto')

*/

console.log(2 > 3 ? 'Es mayor' : 'Es menor');

// OPERADOR DE DESESTRUCTURACION
// Obtiene propiedad especifica de un objeto

let persona ={
    nombre : 'Tamara',
    apellido: 'Frazzetta',
    edad: 28
}
// defino con var una variable, abstraigo nombre del objeto persona
let { nombre } =  persona;
let {edad, apellido}  = persona;
console.log(nombre);
console.log(persona);

// desestructuracion de arreglos

var arreglo = [1, 2, 3, 4]

let [primeraPosicion, numero] = arreglo;
console.log(primeraPosicion);
console.log(numero);

// otra forma es operador de miembro
// (objeto.variable dentro del objeto)
console.log(persona.nombre);

// Tambien se puede hacer notacion por corchete para arreglos y objetos
// en objetos se accede por el nombre de la variable
console.log(persona['nombre']);
// en arreglos se obtiene por la ubicacion que tiene el elemento dentro del array
console.log(arreglo[2]);

// OPERADOR DE DETERMINACION DE TIPO typeof
console.log(typeof'Tamaara');