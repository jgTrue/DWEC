/*Es posible crear las funciones A y B para que se 
cumpla new A() == new B()?
function A() { ... }
function B() { ... }
let a = new A();
let b = new B();
alert( a == b ); // true
Si es posible, entonces proporcione un ejemplo de código.*/

//* Sí se pueden crear las funciones A y B para que se cumpla.
// Definiendo primero un objeto, las funciones devolverán dicho objeto como 'this'.

"use strict";

let object = {};

function A() { return object; }
function B() { return object; }

alert( new A() == new B() );
