/*
009corregirAdicion.js/.html: Aquí hay un código que le pide al usuario dos números y 
muestra su suma. Funciona incorrectamente. El resultado en el ejemplo a continuación 
es 12 (para valores de captura predeterminados). ¿Por qué? Arréglalo. El resultado 
debería ser 3.*/
"use stric"
// //* Los está interpretando como strings, por lo que concatena el contenido.
// let a = prompt("¿Primer número?", 1);
// let b = prompt("¿Segundo número?", 2);
// alert(a + b);
//* La solución es convertir de forma explicita a número las variables. 
let a = prompt("¿Primer número?",1);
let b = prompt("¿Segundo número?",2);
alert(Number(a) + Number(b));


