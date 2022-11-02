/*
006transformToCani.js/.html: Crear una función que reciba una cadena y la devuelva 
transformada en Cani. Por ejemplo, si le pasamos a la función la cadena "una cadena 
cani es como ésta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH". Para ello, hay 
que alternar el uso de MAYÚSCULAS y minúsculas, sustituir la letra C por la K y añadir 
tres letras H al final. 
*/

let frase = "escribe una función que transforme una cadena en cani, hecho.";

function cadenaCani(frase) {
    let arrayFrase = frase.split("");
    let newFrase = "";
    
    for (let i=0; i < arrayFrase.length; i++) { 

        if(64 < arrayFrase[i].charCodeAt() && arrayFrase[i].charCodeAt() < 91 && (i % 2) != 0 && arrayFrase[i] != null){
            //Comprueba que sea mayúscula en una posición impar, además que no este vacia la posición.
            arrayFrase[i] = toLowerCase(arrayFrase[i]);
            if(arrayFrase[i].charCodeAt() == 67 || arrayFrase[i].charCodeAt() == 99 ){
                arrayFrase[i] = "ks"; //!No funciona bien
            }
        }
        else if((96 < arrayFrase[i].charCodeAt() && arrayFrase[i].charCodeAt() < 123 && (i % 2) == 0 && arrayFrase[i] != null)){
            //Comprueba que sea minúscula en una posición par, además que no este vacia la posición.
            arrayFrase[i] = arrayFrase[i].toUpperCase();
            if(arrayFrase[i].charCodeAt() == 67 || arrayFrase[i].charCodeAt() == 99){
                arrayFrase[i] = "K"; //!No funciona bien
            }
        }
    }
    // reconstruye la frase
    arrayFrase.forEach(letter =>  {
        (letter != null) ? newFrase += letter : newFrase += " ";
    });
    
    return newFrase;  
}
let text = "Avs"


alert(cadenaCani(frase)) ;