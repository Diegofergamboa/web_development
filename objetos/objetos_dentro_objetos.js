/* Objetos dentro de objetos */

// En JS se pueden guardar objetos dentro de objetos aqui el siguiente ejemplo

let economia = {
    microeconomia : "Microeconomia",
    macroeconomia : {
        teoria_politica : "Teoria" ,
        macro_base : "Macro" ,
        macro_avanzada : {
            econometria : "macroeconometria" ,
            econometria_avanzada : "econometria avanzada"
        }
    } ,
    
    internacional : "Internacional"
} ;


// Acceder al objeto de manera normal 
console.table(economia) ;


// Acceder al segundo objeto
console.log(economia.macroeconomia) ;

// Acceder al tercer objeto 
console.log(economia.macroeconomia.econometria_avanzada)
