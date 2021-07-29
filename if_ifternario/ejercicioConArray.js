
/* Creación del Array */ 

let OperadoresColombia = [
    {
        nombre : "movistar" ,
        conexion : {
            rural : "3G",
            urbana: "4G",
        } ,
        telefonos : ["motorola", "apple"] ,
        cincoG : true                 
    } ,
    {
        nombre : "claro" ,
        conexion : {
            rural : "2G",
            urbana : "3G",
        } ,
        telefonos : ["apple", "huawei"] ,
        cincoG : false   
    } ,
    {
        nombre : "wom" ,
        conexion : {
            rural : "No tiene" ,
            urbana: "4G" ,
        } ,
        telefonos : ["alcatel"] ,
        cincoG : false  
    }
] ;




/* Imprimir, el primer elemento y, la última tienen conexión rural de tanto y conexión urbana de tanto */

console.log(`${OperadoresColombia[0].nombre} tiene una conexión rural de ${OperadoresColombia[0].conexion.rural} y urbana de ${OperadoresColombia[0].conexion.urbana}`)

/* Agregar, quitar (inicio y al final) - */ 

// upload at end

OperadoresColombia.push(
    {
        nombre: "telcel" ,
        conexion : {
            rural: "No tiene" ,
            urbana: "2G"
        },
        telefonos : ["alcatel"] ,
        cincoG : true   
    }
)


// upload at begin

OperadoresColombia.unshift(
    {
    nombre : "tigo" ,
    conexion : {
        rural : "2G" ,
        urbana: "4G"
    } ,
    telefonos : ["alcatel", "xiaomi"] , 
    cincoG : false   
    }
)

// erase at begin

// OperadoresColombia.shift() 

// era at finish

// OperadoresColombia.pop()

/* Clonar en servicio de internet con cincoG true o false */

let OperadoresColombiaInternet = OperadoresColombia.slice() 


/* Con los servicio de internet voy a hacer las validaciones de if y if_tenario */

if (OperadoresColombiaInternet[0]) {
    console.log(`${OperadoresColombiaInternet[0].nombre} aplicará tecnología 5G"`) ;
} else {
    console.log("No aplica tecnología 5G") ;
}

