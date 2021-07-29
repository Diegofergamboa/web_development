// El if ternario basicamente hace referencia a que se puede simplicar un if que sea de solo dos validaciones

a = false ;

console.log( a ? "A es verdadero" : "A nó es verdadero" ) ;

// Es importante mencionar que cuando en las variables en las condicionales se deja la variable solita, el algoritmo está evaluando directamente que esto sea verdadero o falso.

// Con el ejemplo anterior sería

let a = false ;

if ( a ) { // Aqui estoy validando si a es verdadero por lo que la dejo solita
    console.log("a es verdadero") 
} else { 
    console.log("a no es verdadero") 
}
