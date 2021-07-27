/* DECLARACIÓN DE OBJETOS */

let hardware_mac = {
    material : "aluminio" ,
    color : "plateado" ,
    marca : "apple"
} ;
console.table(hardware_mac)

// la cuestión es de que los objetos se usan 
// simplemente para guardar información de manera más
// sencilla sin necesidad de tener que estar todo el tiempo
// creando variables y las cuales a l ser parámetros 
// hace dificil la tarea de codear


/* llamar método de los objetos */

// Cuando se llama por puntos un objeto se hace con el fin de traer datos de los objetos que realizamos

// por ejemplo

// console.log(hardware_mac.color) ;

// Sin embargo para el caso de que se suponga que el usuario hace la decision de traer esa variable del objeto
// Se usa de la siguiente manera: 

const user_way = "material" ;

// Siempre la metodología va a ser primero el objeto y luego el método

console.log(hardware_mac[user_way]) ;
