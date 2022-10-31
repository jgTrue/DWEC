/*
018compruebaRangoExterno.js/.html: Escribe una condición if para comprobar que 
age NO está entre 18 y 99 inclusive. Crea dos variantes: la primera usando NOT, y la 
segunda sin usarlo.
*/
"use strict";
let edad = prompt("Introduce tu edad");

//*Opción NOT
if(!(edad >= 18) || !(edad <= 99)) alert("Tu edad no está entre 18 y 99");

//*Sin usar NOT
if(edad < 18 || edad > 99) alert("Tu edad no está entre 18 y 99");


