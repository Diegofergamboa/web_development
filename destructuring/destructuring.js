// Antes en JS 5 lo que se solia hacer era colocar las asignaciones de los objetos d ela siguiente manera:


var Objeto = {
    name : "Diego" ,
    apellido : "Ortiz" ,
    apellido2 : "Gamboa" ,
    empresa : "IBM" ,
}

/* MÈTODO EQUIVOCADO EMSCP5 */

// var name = Objeto.name ;
// var apellido = Objeto.apellido ;
// var apellido2 = Objeto.apellido2 ;
// var empresa = Objeto.empresa ;



/* Sin embargo para el código, no es muy rentable tener ese tipo de asignaciones, por ende en EMSCRPT6
lo que se realizó fue que se pudiera hacer esto en una linea de código */

const {name, apellido, apellido2, empresa} = Objeto ;






console.log(name) 
console.log(apellido)
console.log(apellido2)
console.log(empresa)