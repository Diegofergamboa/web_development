/* Juego de piedra papel o tijera */
/* Primero voy a crear la funciòn que realice la validaciòn de si el string es exactamente igual, arriba inicializo las variables */


var option_user = ("piedra");
/* La maquina escogiò piedra */

function check (option_user) {
    if (option_user === "piedra") {
        console.log("Has empatado la maquina ha escogido piedra");
    } else if (option_user === "papel") {
        console.log("Has ganado, papel envuelve a tijera");
    } else {
        console.log("Has perdido, piedra rompe tijera");
    }
}
check("piedra");