/* 005paginaSimple.js/.html: Crea una página web que pida un nombre y lo muestre.*/

"use strict";

//* Declaro la variable userName que contendra el nombre, lo recojo mediante un dialogo prompt
//* Lo recogido mediante prompt se le asignará a la variable userName.
let userName = prompt("Introduce un nombre de usuario:");

//* Para mostrar el nombre uso un alert, que contiene un string y el nombre de usuario incrustado.
alert(`Nombre usuario: ${userName}`);
