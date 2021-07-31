




let superheroes = [
    {
        name : "Superman" ,
        superpoderes : ["Super fuerza", "Volar"] ,
        armas : false
    } ,
    {
        name: "Linterna verde" ,
        superpoderes: ["Volar", "Rayo láser"] ,
        armas : false
    } ,
    {
        name: "Batman" ,
        superpoderes: ["Dinero", "Traje"] ,
        armas : true ,
        armas_lista : ["cohetes", "proyectiles", "batimovil"]
    }
] ;



for (let x = 0 ; x < superheroes.length ; x++ ) {
    if (superheroes[x].armas) {
        console.log(superheroes[x].name + " si tiene armas"); 
        for (let y = 0 ; y < superheroes[x].armas_lista.length ; y++) {
            console.log("La " + y + " arma es " + superheroes[x].armas_lista[y])
        }
    } else if (superheroes[x]) {
        console.log(superheroes[x].name +" no tiene armas"); 
    } else {
        console.log("No es un super heroe")
    }
}
