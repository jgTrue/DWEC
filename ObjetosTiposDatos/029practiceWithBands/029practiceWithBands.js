/*Ejecuta sobre el siguiente array las operaciones 
pedidas:
 var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];
//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
//¿En qué posición del array se encuenta “Cold Play”?*/

"use strict";

let grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

//? filtra los grupos por género obtenido aquellos que son de Heavy Metal.

//* Método que solo lo muestra
// grupos.reduce((arr,value) => {(value.genero === 'Heavy Metal') ? alert(value.nombre): '';});

//* Función que lo guarda
let searchByGenre = grupos.reduce((arr, value) => {(value.genero === 'Heavy Metal') ? arr.push(value.nombre): ''; return arr;}, []);
alert("Grupos Heavy Metal: " + searchByGenre);

//? Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.

let searchByName = grupos.find(item => item.nombre === 'Cold Play');
alert("Búsqueda: " + searchByName.nombre + " - " + searchByName.genero);

//? ¿En qué posición del array se encuenta “Cold Play”?*/
let searchIndex = grupos.findIndex(item  => item.nombre === 'Cold Play');
alert("Se encuentra en la posición: " + searchIndex);