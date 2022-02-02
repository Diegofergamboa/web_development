// Dividir palabra en letras dentro de un array
// Variable con palabra al reves
// return final de comprobacion de si son iguales las palabras

function palindromeComprobation(newWord) {
	// Convertir el string a array
	const separator = (newWord=> {
		return newWord.split('');
	});
	const arrayWord = separator(newWord);
	console.log(arrayWord[arrayWord.length-1]);
	// Variable con palabra al revés
	//console.log(asunderWord);
}

palindromeComprobation('diego');