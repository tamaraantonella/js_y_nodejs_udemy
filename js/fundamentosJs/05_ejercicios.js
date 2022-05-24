//Ejercicios Ciclos

//1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
//Pista: anidamiento.
// dos maneras de hacerlo
let numeroMultiplicar = 2;

let  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let valor of arreglo){
    console.log(valor*numeroMultiplicar);
}

for (i = 1; i < 11; i++){
    let resultado = numeroMultiplicar * i;
    console.log(resultado);
}

//2.Realice el equivalente con la declaración while y do-while
let numeroN = 2;
let i = 1;

while (i<11){
    let resultado = i * numeroN;
    i++
    console.log(resultado);
}

do{
    let resultado = i * numeroN;
    i++
    console.log(resultado);
}while(i <= 10)