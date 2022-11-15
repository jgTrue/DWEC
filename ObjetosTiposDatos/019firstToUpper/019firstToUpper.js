/*
Escribe una función ucFirst(str) que devuelva el string str con 
el primer carácter en mayúscula, por ejemplo:
ucFirst("john") == "John";
*/
"use strict";

let text = prompt("Introduce un texto en minúsculas: ");
alert(ucFirst(text));

function ucFirst(str) { 
    return str.at(0).toUpperCase() + str.slice(1);
}