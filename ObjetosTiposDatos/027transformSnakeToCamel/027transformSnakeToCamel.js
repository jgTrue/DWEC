/*
Escribe la función camelize(str) que convierta 
palabras separadas por _como “mi_cadena_corta” en palabras con mayúscula 
“miCadenaCorta”. Esto sería: quitar todos los _ y que cada palabra después de _ 
comience con mayúscula. Ejemplos:
camelize("background_color") == 'backgroundColor';
camelize("list_style_image") == 'listStyleImage';
camelize("_webkit_transition") == 'WebkitTransition';
P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo 
(join).
*/

"use strict";

let phrase = prompt("Introduce frase en snake_case:");

alert(camelize(phrase));

function camelize(str){

    let arrPhrase = str.split("");
    let i;

    for (const iterator of arrPhrase) {
        if(iterator === '_'){
            i = arrPhrase.indexOf('_'); // Toma la posición de '_'
            arrPhrase[i+1] = arrPhrase[i+1].toUpperCase(); //Pasa a mayúsculas la siguiente letra
            arrPhrase[i] = ""; // Reemplaza '_' 
        }
    }
    return arrPhrase.join("");
}


