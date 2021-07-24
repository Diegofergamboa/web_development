var variable = "Agustin" ;
var variable = 19 ;
var variable = {} ;
var variable = 15.2 ;


function tipovariable (variable) {
    return console.log(`El tipo de variable para ${variable}, es de ${typeof(variable)}`) ;
    debugger
}
tipovariable(variable)

/* 
    Es importante saber también que en JS los valores de las variableas no deben ser específicamente tipados sino son por su parte "no tipado"
    Es decir, que las variables se pueden transformar en variables de cualquier cosa sin necesidad de que sean directamente
    un string o algo por ese estilo . A menos de que se requieran realizar operaciones matemñaticas las cuales son imposibles de hacer con valor != a numeros o flotantes

    / ::: ¡Que es Typescript! = a grande srasgos es brindada y soportada por microsoft y, le da la capacidad da js de ser altamente tipado lo que permite realizar scripts enfocados a matemáticas y operaciones matemáticas
*/