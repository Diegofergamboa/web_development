// Función que de por respuesta la suma de dos numeros con return 

// function suma (a, b) {
//     let total =  a + b ;
//     return console.log(total) ;
// } ;

// suma(1, 2);

// function tablaMultiplicar (numero) {
//     for(let n = 0 ; n <= 10 ; n ++) {
//         let total = n * numero ;
//         console.log(`${n} x ${numero} = ${total}`) ;
//     }
// }

// tablaMultiplicar(1);

// Función que regrese la edad según el año de nacimiento 

function bornYear (year) {
    date = new Date ;
    actualYear = date.getFullYear();
    let edad = actualYear - year ;
    return edad
}
birthYear = bornYear(1996) ;
console.log(birthYear) ;

