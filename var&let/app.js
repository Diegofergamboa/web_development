/* TIPOS DE VARIABLES */
// Clase de variables 
// En JS existen 3 tipos de valores que se pueden colocar, las cuales son: var, let y cons
// Estos tipos de variables tienen distintos usos
// para las variables de tipo  var, son las variables que comunmente se usan

// /* VARIABLES VAR */
// var variable1 = "" ;
// var variable1 = 16 ;
// console.log(variable1)

// /* VARIABLES LET */

// function variable2 (variable2) { // Se usan generalmente para liberar espacio en disco y para liberar espacio más rápido 
//     let variable = "2" ; // Carga solamente de manera temporal y se guarda por un corto espacio de tiempo
//     return console.log(variable) ; // Y, cuando termina su ejecución en el CONTEXTO, esta se borra
// }
// // variable2()

// console.log(variable2) // En este caso se puede observar que en definitica va a imprimir en sí la función más no el valor de la variable
// console.log(variable)


/* VARIABLES CONST */

// las variables que son de tipo constantes son muy importante para valores que aunque en JS exista un bajo nivel de tipado,
// las podemos colocar FIJAS sin que su valor cambio en lo más mínimo

const URL_API = ('https:/google.com/') ;
const VERSION_API = 'v1' ;
const ID_API = 26 ;

// Como se puede ver en el ejemplo de arriba es muy importante que las variables sean en sí mismas
// cuando son constantes para casos de variables que no van a cambiar 
// es importante también tratar de declararlas siempre en mayusculas como buena práctica

console.log(`${URL_API}/${VERSION_API}/${ID_API}/`) ;