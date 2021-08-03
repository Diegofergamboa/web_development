/* Objeto con personajes */

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
    } ,
    {
        id : 4 ,
        name: "Davin" ,
        image: "https/www.google.com/davin/"
    }
];

// convertir el objeto a JSON

const ApiCharactersJSON = JSON.stringify(ApiCharacters); // Ahora va a existir una variable que se llama ApiCharacter, la cual alberga toda la información en typeof de string y es en formato json

// convertir el objeto de JSON a OBJETO again

const Api_retorn_Characters = JSON.parse(ApiCharactersJSON);
console.log(Api_retorn_Characters.length)
// Filtrar por id según lo que el usuario diga de nombre entre los 4 que están
// Darlo en consola

const api_result = Api_retorn_Characters.filter(character => character.id === 1); //Forma correcta de hacer un filter



// Usar el método setTime out para decir que se esta procesando el reemplazamiento de la url

function changeUrl () { 

    // Comienzo de la función 
    console.log("Vamos a cambiar la url de cada personaje") ;
    console.log("Urls anteriores = ") ;

    // Espera de tiempo para simular ejecucion de cambio de url 
    setTimeout ( () => {
        console.log("...Procesando las nuevas url...") ;
        return printOldUrl() ;
    },2000)
    debugger
    // Función que imprime por pantalla la url anterior de cada personaje 
    function printOldUrl (Api_retorn_Characters) {
        for (let i = 0 ; i <= Api_retorn_Characters.length ; i ++) debugger {
            console.log(Api_retorn_Characters[i]) ;
            debugger
        }
    };
};

changeUrl()