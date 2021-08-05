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
        image : "www/google.com/davin.es/"
    }
];



// convertir el objeto a JSON

const ApiCharactersJSON = JSON.stringify(ApiCharacters); // Ahora va a existir una variable que se llama ApiCharacter, la cual alberga toda la información en typeof de string y es en formato json

// convertir el objeto de JSON a OBJETO again

const Api_retorn_Characters = JSON.parse(ApiCharactersJSON);
// console.log(Api_retorn_Characters.length);
// Filtrar por id según lo que el usuario diga de nombre entre los 4 que están
// Printearlo en consola

const api_result = Api_retorn_Characters.filter(character => character.id === 1); //Forma correcta de hacer un filter


// Usar el método setTime out para decir que se esta procesando el reemplazamiento de la url

function oldUrl () { 

    // Comienzo de la función 
    console.log("Vamos a cambiar la url de cada personaje") ;
    console.log("Urls anteriores = ") ;
    console.log("##########################################");
    return printOldUrl() ; 

    // Funcion que printea en consola cada uno de los elementos del array sin haber cambiado la URL
    function printOldUrl () {
        Api_retorn_Characters.forEach(i => {
            console.log(i.image) ;
        });      
    };

};


// Función que reemplaza la anterior URL de imagen por la nueva url de imagen
function d_replace () {
    Api_retorn_Characters.forEach ( element => {
        c = element.image ;
        c = c.replace(c, "new url coming soon") ;
        return console.log(c) ;
    })
}



oldUrl();
d_replace();

const newUrl = [ "www/google.com/rick.COM", "www/google.com/morty.COM/", "www/google.com/candas.COM/", "www/google.com/davin.COM/"]
