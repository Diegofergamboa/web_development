
// Basicamente el codigo de switch es como para organizar los casoss de condicionales en casos direferentes según venga el vaso 

// switch(expression) { //Expresión a evaluar
//     // case x: En el primer caso
//       // code block
//     //   break; El break es importante hacerlo al final de cada bloqueo de código
//     // case y: Siguiente caso como en el ejemplo
//       // code block
//     //   break; 
//     // default:  El apartado de default es como el 'else'  de los switch
//       // code block
//   }



let color = 'verde' ;

switch(color) {
    case (color = 'amarillo') :
        amarillo(color);
        break;
    case (color = 'rojo') :
        rojo(color);
        break;
    case (color = 'verde') :
        verde(color);
        break;
    default :
        console.log('Solo amarillo, azul y rojo está definido')
}


function amarillo() {
    console.log('Estamos dentro del primer caso, amarillo') ;
    console.log('Estamos en el amarillo') ;
}
function rojo() {
    console.log('Estamos dentro del segundo caso, rojo') ;
    console.log('Estamos en el rojo') ;
}

function verde() {
    console.log('Estamos dentro del tercer caso, verde') ;
    console.log('Estamos en el verde') ;
}