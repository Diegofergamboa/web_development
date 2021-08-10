alert("Localstorage");

var nombre = "Diego" ;
var apellido = "Ortiz" ;
var ciudad = "Pamplona" ;

localStorage("nombre",nombre) ;
localStorage("nombre",apellido) ;
localStorage("nombre",ciudad) ;

console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellido"));
console.log(localStorage.getItem("ciudad"));


// Para remover los valores del local storage

localStorage.removeItem("apellido");

// Para actualizar los datos 

localStorage.setItem("nombre","Fernando") ;

// Es bueno dominar localstorage, con el fín de poder interactuar mejor con las API`s y la información que allí se guarda