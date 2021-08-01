// Funciones de tipo arrow

// Son funciones que se deben realizar principalmente cuando no se necesitan métodos  y, en su mayoria son anónimas

// La sintaxis es = 

() => {
    console.log("hola mundo") ;
}
// Por lo general se recomienda guardarlas en constantes 

const miArrowFunction = () => {
    console.log("hola mundo") ;
}

// Se usan cuando principalmente se necesitan hacer funciones rápidas y que no requieren de métodos como new, target yield entre otros.
// Es importante mencionar que no se pueden usar como constructor tampoco.

const suma = (a, b) => {
    c = a + b ;
    return c ;
}
suma(1, 2)
console.log(c)

