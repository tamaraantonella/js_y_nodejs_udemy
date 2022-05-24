/**
 * 
 * Fin y FindIndex
 *  
 * 
 */

// Find
var clientes = [
    {id: 1, nombre: 'Tamara'},
    {id: 2, nombre: 'Jesus'},
    {id: 3, nombre: 'Mabel'},
    {id: 4, nombre: 'Ezequiel'}
]
// quiero buscar un solo elemento del array, aunque haya dos id iguales, solo retorna la primer coincidencia.
// si aplicaramos filter, nos retorna un array con todas las principales coincidencias, si son dos, retorna dos.
var cliente = clientes.find((cliente) => cliente.id === 2 )
console.log(cliente);

// nos da la posicion de la variable dentro del array.
var posicion = clientes.findIndex ((cliente) => cliente.id === 2 )