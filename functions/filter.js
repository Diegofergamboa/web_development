// Esta función o método de función o array es la más importante, porque he descubierto la necesidad de hacerla :D especialmente, en la app de Rick y morty que tenía planeada 

// Basicamente las funciones que son con filter, son bucles que se crean por medio de funciones arrow para buscar ciertos objetos con ciertas caracteristicas dentro de arrays


const ApiCharacters = [
    {
        id : 1 ,
        name: "Rick" ,
        image : "www/google.com/rick.es/"
    } ,
    {
        id : 2 ,
        name: "Morty" ,
        image : "www/google.com/morty.es/"
    } ,
    {
        id : 3 ,
        name: "Candas" ,
        image : "www/google.com/candas.es/"
    }
];

console.log(ApiCharacters[0]);

// Por ejemplo, voy a buscar a Rick en específico, el cuál tiene como id el numero 1.

const first_character = ApiCharacters => ApiCharacters.filter(ApiCharacters.id === 1);
console.log(first_character);