/*
Contesta los siguientes comentarios con respecto a la cadena 
que contiene la variable thor: 
let thor = "Thor es el hijo de Odín";
Largo de la cadena
Encontrar la letra o
Encontrar el carácter que ocupa la posición 3
¿Qué carácter ocupa la posición 1?
Trocea la cadena usando los espacios en blanco
Reemplaza Thor por Loki
Recorta la cadena para que devuelva la palabra Odín
¿Puedes encontrar la letra a? Demuéstralo
Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
*/
"use strict";

let thor = "Thor es el hijo de Odín";
//? Largo de la cadena
alert("Largo de la cadena: " + thor.length);
//? Encontrar la letra o
// Muesta las posiciones que ocupa la letra 'o'
let arrFrase = thor.toLowerCase().split('');

let findO = arrFrase.reduce((arr, value, i) => {(value === 'o') ? arr.push(i): ''; return arr;}, []); 

alert(findO);
//? Encontrar el carácter que ocupa la posición 3

alert("Letra pos 3: " + thor.charAt(3))

//? ¿Qué carácter ocupa la posición 1?
alert("Letra pos 1: " + thor.charAt(1))

//? Trocea la cadena usando los espacios en blanco
alert(thor.split(" "));

//? Reemplaza Thor por Loki
alert(thor.replace("Thor", "Loki"));

//? Recorta la cadena para que devuelva la palabra Odín
// indexOf para el principio del corte, indexOf + 4 caracteres de la palabra para el final
alert(thor.slice(thor.indexOf("Odín"), (+thor.indexOf("Odín") + 4))); 

//? ¿Puedes encontrar la letra a? Demuéstralo

(thor.toLowerCase().includes('a')) ? alert(thor.indexOf('a'))  : alert("No se encuentra la letra 'a'");

//? Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
let thorMitad2 = thor.substring(thor.length / 2);
let thorMitad1 = thor.replace(thorMitad2, "");

alert(thorMitad1.toLowerCase() + thorMitad2.toUpperCase());







