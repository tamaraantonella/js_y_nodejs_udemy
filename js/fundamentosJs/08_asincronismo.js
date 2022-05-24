// ejemplo de como se ejecuta todo y lo que tarda, va a ejecutarse luego.

console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");
// settimeout, js lo detecta como asin. es concurrente no bloqueante. sigue con las otras tareas y despues la ejecuta a la tarea 4
setTimeout(() => {
  console.log("Tarea 4");
}, 2000);

console.log("Tarea 5");
console.log("Tarea 6");

// CALLBACKS
// se agrega cb (callback) como tercer parametro
// callback son parametros que se pasan a otras funciones

const suma = (a, b, cb) => {
cb(a + b);
};

var resultado = suma(1, 3, (resultado) => {
console.log(resultado);
});

// PROMISES
// una funcion que retorna una nueva promesa
const getData = (error) =>  new Promise((resolve, reject) => {
    if (!error){
        resolve ({
            nombre: 'Tamara',
            apellido: 'Frazzetta'
        })
    }else {
        reject ('No pudimos obtener datos')
    }
});

// no podemos pasarle un parametro como a getData
const getData2 = new Promise ((resolve, reject) => {})

getData(true).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})