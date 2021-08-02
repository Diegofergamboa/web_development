/* Las funciones con el método map(), se usan para transformar objetos concretamente 
tiene por lo general un input que es un array, devolviendo otra versión del array */

// Se construye un array que haga dobles los números que estén en el array anterior.

// const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Se construye un nuevo array y, se le asigna una función de tipo flecha que tenga como parámetro el array anterior.


// const newArray = arrayNum.map (arrayNum => { // Aqui se coloca el array anterior y, se inicializa dentro de la variable la función arrow 
//     return arrayNum * 2 ;
// }); 

// console.log(newArray)

// Para corregir objetos.

const nombres = [{
        clave : "Diego" , valor : "Ortiz" 
    },
    {
        clave : "Fernando", valor : "Gamboa"
    }
];



const nuevosNombres = nombres.map(objeto => {
    let obj = {} ;
    obj[objeto.clave] = objeto.valor ;
    return obj ;
});
console.log(nuevosNombres);
