/* La aplicacion de switchs es algo parecido respecto a los condicionanates de if y else, sin embargo 
    en estos casos el codigo sirve para realizar la validacion de ciertos grupos */

/* Suponiendo que el rey esta en jaque mate, para salir de este jaque tiene 3 jugadas validas y dos invalidas. */

var next_movement = "c1";

switch (next_movement) {
    case "c3":
        console.log("Movimiento incorrecto te ataca la reina");
        break;
    case "c2":
        console.log("Movimiento acertado has salido del jaque");
        break;
    case "d1":
        console.log("Movimiento valida, has salido del jaque");
        break;
    default:
        console.log("Movimiento invalido");
        break;
}       