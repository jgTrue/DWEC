/*
Crea una función randomInteger(min, max) que 
genere un número entero aleatorio entre min y max incluyendo ambos, min y max, 
como valores posibles. Todo número del intervalo min..max debe aparecer con la 
misma probabilidad. Ejemplos de funcionamiento:
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/
"use strict";

let min = +prompt("Número mínimo: ");
let max = +prompt("Número máximo: ");

alert(randomInteger(min,max));

function randomInteger(min, max){
    let resultado =  min + Math.random() * (1 + max - min);
    return Math.floor(resultado);
}