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

// Voy a reemplazar las url, para estudiar el método .replace()



// console.log(ApiCharactersJSON); 