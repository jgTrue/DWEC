/*
Escribe la función isEmpty(obj) que devuelva el valor true 
si el objeto no tiene propiedades, en caso contrario false. Debería funcionar así:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false
*/

"use strict";

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Hora de levantarse";

alert( isEmpty(schedule) ); // false

function isEmpty(obj){

    for(let key in obj){
        
        if (obj[key] != null){
            return false;
        }
    }
    return true;
}