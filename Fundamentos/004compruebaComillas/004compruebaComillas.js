/*004compruebaComillas.js/.html: ¿Cuál es la salida del script? Piénsalo y combruébalo.
let name = "Peter Parker";
alert( `Hola ${1}` ); // ?
alert( `Hola ${"name"}` ); // ?
alert( `Hola ${name}` ); // ?
*/
"use strict";

//*El  nombre de la variable debería ser userName o alguno más descriptivo.
let name = "Peter Parker";

//* Muestra un string que tiene incrustado un entero.
// Hola 1
alert( `Hola ${1}` );  

//* Muestra un string que tiene incrustrado el string "name".
// Hola name
alert( `Hola ${"name"}` ); 

//* Muestra un string con el contenido de la variable name incrustado
//Hola Peter Paker
alert( `Hola ${name}` ); 
