/* 
Ciclos
-while
-do while
-for

*/

// WHILE
// dentro de la condicion de while, va a ser true o false, mientras sea true, se ejecuta
let contador = 0;
// cuenta desde 0 hasta 10, en total 11 veces
// si quiero que se ejecute hasta 10 puedo poner la condicion contador < 10
// while evalua la condicion, si no se cumple, no se ejecuta el codigo
while (contador <= 10){
    console.log('Hola mundo');
    contador++
}

// DO WHILE
// aca se ejecuta igual el codigo al menos una vez, y despues evalua la condicion
let vueltas = 3;
do {
    console.log('Hola mundo');
    vueltas++;
} while (vueltas < 2);

// FOR
// for (expresion inicial; condicion bajo la que se ejecuta el ciclo; suma en cada vuelta de la expresion inicial )
// i seria como el contador de vueltas

for (let i = 0; i < 5; i++){
    console.log('Hola mundo');
}

// FOR IN
// es para iterar dentro de un objeto
// for (variable operadorIN objeto){
// }

// declaro e inicilizo mi objeto
let persona = {
    edad: 28,
    apellido: 'Frazzetta',
    nombre: 'Tamara'
}

// imprime las claves del objeto. no sus valores. si quiero que imprima valores, pongo (objeto [variable]) 
for (let clave in persona){
    console.log(clave, persona[clave]);
}

// FOR OF
// nos ayuda a obtener datos, y muestra valores de nuestro arreglo
// esto sirve para array o strings, no para objetos

let  arreglo = [1, 2, 4, 5]
for(let valor of arreglo){
    console.log(valor);
}

let  cadena = 'Tamara';
for(let valor of cadena){
    console.log(valor);
}