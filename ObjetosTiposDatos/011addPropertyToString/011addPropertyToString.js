/*
Puedo agregar una propiedad a un string?: 
Considera el siguiente código:
let str = "Peter";
str.test = 5;
alert(str.test);
Qué piensas: ¿funcionará? ¿Qué mostrará? ¿Por qué?
*/
//TODO no lo hermos dado.
//* No funcionaría, un string pertenece al grupo de los primitivos, no un objeto. 
//* El resultado que mostrará será 'undefined'.

//* Poseen métodos pero esto sucede cuando accedemos a los mismos, debído a que se crea
//* un objeto especial que recibe el nombre de objeto envoltorio(object wrapper).
//* El string recibe la propiedad al crearse el objeto envoltorio pero, despúes de la ejecución se destruye.

"use strict";

let str = "Peter";
str.test = 5;
alert(str.test);