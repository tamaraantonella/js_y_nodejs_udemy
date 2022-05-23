//Ejercicios Control de Flujos

/*1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch */

let dia = 'lunes';
if (dia === 'lunes'){
    console.log('Monday');
} else if (dia === 'martes'){
    console.log('Tuesday');
} else if (dia === 'miercoles'){
    console.log('Wednesday');
} else if (dia === 'jueves'){
    console.log('Thursday');
} else if (dia === 'viernes'){
    console.log('Friday');
} else if (dia === 'sabado'){
    console.log('Saturday');
} else{
    console.log('Sunday');
}

switch (dia) {
    case 'lunes':
        console.log('Monday');
        break;
    case 'martes':
        console.log('Tuesday');
        break
    case 'miercoles':
        console.log('Wednesday');
        break
    case 'jueves':
        console.log('Thursday');
        break
    case 'viernes':
        console.log('Friday');
        break
    case 'sabado':
        console.log('Saturday');
        break
    default:
        console.log('Sunday');
}
/*2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
Si la compra supera los $50 el gasto de envío será gratuito
El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch */

let compra = 40;

if (compra <= 10){
    let total = compra + 3
    console.log("compra y envio en total: " + total);
}else if (compra <= 20){
    let total = compra + 5
    console.log("compra y envio en total: " + total);
} else if (compra <= 50){
    let total = compra + 7
    console.log("compra y envio en total: " + total);
} else if (compra >= 50){
    console.log('envio gratuito');
}
