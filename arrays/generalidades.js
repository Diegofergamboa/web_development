// // ¿Que són los arrays?

// // Son tipos de datos que son listas superiores que llevan en sí mismas objetas
// // Pueden ser usadas para métodos de mutación y de recorrido

// /* DECLARACIÓN DE UN ARRAY */

let miArray = [
    "Primer elemento" ,
    2 ,
    3 ,
    "Cuarto elemento"
] ;
// console.table(miArray)

// // Tal y como se observa pueden existir distintos tipos de datos dentro de los arrays

// /*  -- ANADIR ELEMENTOS -- */

miArray.push(5) // Se pueden agregar elementos con la estructura de llamar el objeto y agregar con corchetes valores

miArray.push("Sexto elemento", 7) // Se pueden agregar varios elementos al tiempo

// // console.log(miArray)

// // Concatenar textos

// console.log("El primer elemento de mi Array es: " + miArray[0])

// // Para llamar elemento del array se hace necesario llamarlos por su posición :

// console.log(miArray[2])

/* ELIMINAR Y AÑADIR DATOS */

// Eliminar 

miArray.pop()

// Añadir un elemento al principio del array

miArray.unshift("Elemento cero")

/* BUSCAR ELEMENTO POR INDEX */

let index_0 = miArray.indexOf("Elemento cero") // Me devuelve en una variable el index o posición del elemento que estoy buscando

console.log(miArray[index_0]) // Imprimiendo el valor de la posición que estoy mandando a llamar del array

/* CLONAR ARRAYS */

// Es útil realizar clonaciones de arrays, cuando tenemos que trabajar en varias versiones del array, para acceder a las anteriores sin problemas 


let nuevoArray = miArray.slice() // Realiza una clonación del viejo array

nuevoArray.push("Elemento del nuevo array")

miArray.push("Último array de mi viejo array")


