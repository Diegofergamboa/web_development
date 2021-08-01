// la funcion con espera de tiempo, es muy útil cuando se necesita esperar para pasar un código en específico

function edadUser () {

    console.log("Estamos calculando tu edad") ;

    setTimeout ( () => {
        console.log("Seguimos trabajando en ello") ;
        return edad() ;
    },5000)

    function edad () {
        console.log("Tu edad es de 25 años") ;
    }
};

edadUser();