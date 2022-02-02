// Dividir palabra en letras dentro de un array
// Variable con palabra al reves
// return final de comprobacion de si son iguales las palabras

function palindromeComprobation(newWord) {
	// Convertir el string a array.
	const separator = (newWord=> {
		return newWord.split('');
	});
	const arrayWord = separator(newWord);
	
    // Variable con el valor del string al revés.
    let newArray = [];
    function otherWay() {
        let contador = arrayWord.length-1;
        for (let index = 0; index < arrayWord.length; index++) {
            newArray += arrayWord[contador];
            contador -= 1;
        }
        return newArray;
    }
    otherWay(arrayWord)
	
    const backward = newArray
    const forward = arrayWord.join('')
    
    // validación de las dos palabras

    if (backward === forward){
        console.log(true);
    } else {
        console.log(false);
    }
}

palindromeComprobation('juana');