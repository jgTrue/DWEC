/*
Ejecuta sobre el siguiente array las operaciones pedidas:
 let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];
Meter a Peter Pan al final del array disney.
Pintar el array
Meter a El capitán Garfio al principio del array, no olvides la película
Meter al cocodrilo detrás del capitán, no olvides la película
Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
Encontrar el índice de Campanilla.
Buscar al cocodrilo.
Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los 
elementos del array. */
"use strict";

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];

disney.push({nombre: "Peter Pan", pelicula: "Peter Pan"});

for (const i of disney) {
    document.write("<b>Nombre:</b> " + i.nombre + ", <b>Película:</b> " + i.pelicula + ".<br>");
}

disney.unshift({nombre: "Capitán Garfio", pelicula: "Peter Pan"});

disney.splice(1,0,{nombre: "Cocodrilo", pelicula: "Peter Pan"});
console.log(disney)
let findFilm = disney.reduce((arr, value) => {(value.pelicula === "Peter Pan") ? arr.push(value): ''; return arr;}, []); 
for (const i of findFilm) {
    document.write("<br><b>Nombre:</b> " + i.nombre + ", <b>Película:</b> " + i.pelicula + ".");
}

let findChar = disney.reduce((arr, value, i) => {(value.nombre === "Campanilla") ? arr.push(i): ''; return arr;}, []);
for (const i of findChar) {
    document.write("<br><br><b>Índice de Campanilla:</b> " + i + ".");
}

let findCoco = disney.reduce((arr, value, i) => {(value.nombre === "Cocodrilo") ? arr.push(value.nombre + " " + value.pelicula + " ,índice " + i): ''; return arr;}, []);
for (const i of findCoco) {
    document.write("<br><br><b>Cocodrilo encontrado:</b> " + i + ".<br>");
}

function shuffle(array){

    return array.sort(() => Math.random() - 0.5);
}

shuffle(disney);
for (const i of disney) {
    document.write("<br><b>Nombre:</b> " + i.nombre + ", <b>Película:</b> " + i.pelicula + ".");
}