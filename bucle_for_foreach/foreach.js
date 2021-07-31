// los bucles foreach, son muy usados en la industria últimamente siendo los que han desplazado principalmente el uso del for normal 

// La sintaxis de los for, aunque suele variar la principal es la siguiente = 

/* Cuando se industroduzcan números dentro del array, este le sume dos a cada numero introducido */

let miArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

miArray.forEach ( n => {
    // console.log(n + " sumando dos, da como resultado " + (n + 2)) ;
    if (n % 2 === 0 ) {
        console.log(`${n} es un número par`) ;
    } else {
        console.log(`${n} es un número impar`)
    }
}) ;