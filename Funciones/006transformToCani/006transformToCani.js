/*
006transformToCani.js/.html: Crear una función que reciba una cadena y la devuelva 
transformada en Cani. Por ejemplo, si le pasamos a la función la cadena "una cadena 
cani es como ésta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH". Para ello, hay 
que alternar el uso de MAYÚSCULAS y minúsculas, sustituir la letra C por la K y añadir 
tres letras H al final. 
*/

let frase = "Una cadena cani como esta";

function cadenaCani(frase) {
    let arrayFrase = frase.split("");
    let newFrase = "";
    
    for (let i=0; i < arrayFrase.length; i++) { 

        if((i % 2) != 0 && arrayFrase[i] != null && arrayFrase[i] != " "){
            //Comprueba que sea una posición impar, además que no este vacia la posición ó sea espacio.
            
            if(arrayFrase[i] == "c" || arrayFrase[i] == "C" ){
                arrayFrase[i] = "k";
            }else{
                arrayFrase[i] = arrayFrase[i].toLowerCase();
            }
        }
        else if(((i % 2) == 0 && arrayFrase[i] != null && arrayFrase[i] != " ")){
            //Comprueba que sea una posición par, además que no este vacia la posición ó sea espacio.
           
            if(arrayFrase[i] == "c" || arrayFrase[i] == "C"){
                arrayFrase[i] = "K";
            }else{
                arrayFrase[i] = arrayFrase[i].toUpperCase();
            }
        }
    }
    // reconstruye la frase
    arrayFrase.forEach(letter =>  {
        (letter != null) ? newFrase += letter : newFrase += " ";
    });
    
    return newFrase+"HHH";  
}

alert(cadenaCani(frase)) ;