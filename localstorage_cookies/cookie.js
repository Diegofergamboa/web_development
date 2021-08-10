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

/* para que se traten de manera correcta, es necesario colocar colocar la función de escape, con la que se
tomarán los datos de manera decisiva con el fín de gestonar correctamente y dar valores adecuados */

var cookie = document.cookie = "marcaCoche=BMW" ;
console.log(cookie);
var cookie = escape(cookie);

// Por lo general las cookies, se eliminan en el transcurso de 24 horas o, cuando el usuario lo necesite 

/* FUNCIÓN PARA CREAR COOKIE */

const crearCookie = (clave, valor) => {
    const valorEscape = escape(valor) ; //De hecho esta variable es para que el valor quede en escape para evitar crash de sintaxis
    /* El siguiente es un ejemplo de una cookie que se va a vencer dentro de un mes */
    let mesSiguiente = new Date ();
    mesSiguiente.setMonth(mesSiguiente.getMonth() + 1) ;

    document.cookie(`${clave}=${valor}`); // La creación de la cookie;
}
crearCookie("razaPerro","Cooker Spaniel");


/* FUNCIÓN PARA ELIMINAR COOKIE */

const borrarCookie = (clave, valor) => {
    let mesAnterior = new Date();
    mesAnterior.setMonth(mesAnterior.getMonth() -1 );

    document.cookie=(clave+"="+valor+"expires="+mesAnterior);
};