/*013muestraSigno.js/.html: Usando el constructor if..else, escribe un código que 
obtenga a través de un prompt un número y entonces muestre en un alert:
 1, si el valor es mayor que cero,
 -1, si es menor que cero,
 0, si es igual a cero.
En la tarea asumimos que siempre el usuario introduce un número.*/

"use strict";

let inputUser = Number(prompt("Introduzca un número")); //*Almacenamos como numero el imput del usuario

//* Evaluaciones
if (0 < inputUser ){ 
    alert(1);
}else if(0 > inputUser){
    alert(-1);
}else{
    alert(0);
}