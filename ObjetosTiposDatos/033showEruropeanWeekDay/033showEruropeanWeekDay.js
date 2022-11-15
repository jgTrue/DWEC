/*
En los países europeos se cuentan los días de la 
semana a partir del lunes (número 1), seguido del martes (número 2), hasta el 
domingo (número 7). Escribe una función getLocalDay(date) que devuelva el día de la 
semana “europeo” para la variable date. let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) ); // tuesday, should show 2
Una vez lo obtengas, tradúcelo a español.
*/

"use strict";

let date = new Date("2012", "0", "1");

alert( getLocalDay(date));

function getLocalDay(date){
    let dias = ["domingo","lunes","martes", "miércoles", "jueves", "viernes", "sábado"];
    return dias[date.getDay()] + " " + ((date.getDay() === 0) ? 7 : date.getDay());
}