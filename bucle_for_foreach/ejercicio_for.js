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
];

/* Función para construir un objeto */

function constructorObjeto (home, model, mark) {
    singleCar.push({
        home ,
        model,
        mark 
    })
} ;

constructorObjeto("chevrolet","2015","camaro") ;



/* Función para llamar el objeto */

console.log(singleCar);
function callObject (singleCar) {
    return singleCar.forEach(car => {
        console.log(singleCar[car]);
    });
} ;
    

callObject(singleCar);