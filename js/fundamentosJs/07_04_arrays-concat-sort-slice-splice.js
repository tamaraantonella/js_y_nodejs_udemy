// Concat
// para concatenar dos arreglos
// no modifica los arrays, sino crea uno nuevo con los arrays concatenados

var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,10];
var array3 = array1.concat(array2);

console.log(array3);

// Sort
// ordena los numeros dentro del array
// y los strings los ordena alfabeticamente ascii
var arrayNum = [2,4,5,6,8,9,0];
console.log(arrayNum.sort());

// ordenar de menor a mayor numeros
var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a, b) => a - b);
console.log(ordenado);

// Splice
// si solo uso un parametro y pongo posicion 1, borra todo lo del arreglo y solo deja los elementos =< a la posicion que seleccionamos.
var nombres = ['Tamara', 'Yesica', 'Pablo']
nombres.splice(1, 1) // tiene dos parametros, el primer elemento indica a partir de donde queremos eliminar, en el segundo parametro indicamos cuantas variables queremos que elimine
console.log(nombres);

// Slice
// nos retorna una copia de una parte del array

var resultadoSlice = nombres.slice(1, 2) //dos parametros, el primero desde donde, el segundo  hasta cuando. No incluye a la ultima posicion
console.log(resultadoSlice);