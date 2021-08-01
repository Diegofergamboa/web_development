// El objetivo es llamar una función que se le pase como parámetro un objeto ya establecido

// Contrucción del objeto = 

let singleCar = [ 
    { 
    casa: "BMW" ,
    modelo: "1995" ,
    marca: "M3"
    } ,
    { 
    casa: "Mercedes Benz" ,
    modelo: "2020" ,
    marca: "AM5"
    },
    { 
    casa: "Ford" ,
    modelo: "2006" ,
    marca: "Mustang GT"
    }
] ;
// console.log(singleCar.marca)

function Car (singleCar) {
    for (let i = 0 ; i <= singleCar.lenght ; i ++ ) 
    {
        console.log(i) ;
        console.log(`Automovil de casa ${singleCar[i].casa}, modelo ${singleCar[i].modelo} y, marca ${singleCar[i].marca}`) ;
    }
} ;

Car() ;