// Las cookies basicamente son  registros que se tienen para guardar información
// las cookies por lo general, tienen una fecha de expiración

// Se gestionan además por localstorage

// la manera de escribirlas es con la siguiente "función" = 

// document.cookie = "clave", "valor" ;
// let cookies = document.cookie = "clave"="valor";

// Por lo general las cookies que se crean se eliminan por si mismas a las 24h o en su defecto, 
// se les coloca una fecha de expiración al momento de invocarlas con el document.cookie

document.cookie = "marcaCoche=Audi";
document.cookie= "colorCoche=rojo";

/* FUNCIÓN PARA CREAR COOKIE */
