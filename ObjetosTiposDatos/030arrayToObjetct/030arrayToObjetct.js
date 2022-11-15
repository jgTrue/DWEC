/*
Crea un objeto a partir de un array Supongamos que 
recibimos un array de personajes con la forma {id:..., nombre:..., pelicula:... }.
Crea una función groupById(arr) que cree un objeto, con id como clave (key) y los 
elementos del array como valores. Dicha función es realmente útil cuando trabajamos 
con información del servidor.
Para esta actividad asumimos que cada id es único. No existen dos elementos del array 
con el mismo id.
Usa el método de array .reduce en la solución.
*/

"use strict";

let cineKinky = [
    {id:1980, nombre: "El Jaro", pelicula: "Navajeros"},
    {id:1977, nombre: "Torete", pelicula: "Perros callejeros"},
    {id:1982, nombre: "El Pirri", pelicula: "Colegas"},
    {id:1983, nombre: "Paco Torrecuadrada", pelicula: "El pico"}
];

let cineByID = groupById(cineKinky);
console.log(cineByID);

function groupById(array) { //Crea un objeto con el id como key y el resto como valor de esta.
    return array.reduce((obj, value) => { obj[value.id] = value; return obj;}, {})
  }



