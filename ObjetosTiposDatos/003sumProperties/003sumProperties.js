/*
Tenemos un objeto que almacena los salarios de nuestro 
equipo:
let salaries = {
  Harry: 100,
  Ron 160,
  Hermione: 130
}
Escribe el código para sumar todos los salarios y almacenar el resultado en la variable 
sum. En el ejemplo de arriba nos debería dar 390. Si salaries está vacío entonces el 
resultado será 0.
*/

"use strict";

let salaries = {
    Harry: 100,
    Ron: 160,
    Hermione: 130
}

//*Notificación salarios
alert(calcularSalario(salaries));

function calcularSalario(obj){
    let sum = 0; // Almacena el resultado
    
    for(let key in obj){

        if (obj[key] != null){ 
            sum += obj[key];

        }else{// Si salaries está vacío entonces el resultado será 0.
            sum += 0; 
        }
    }
    return sum;
}