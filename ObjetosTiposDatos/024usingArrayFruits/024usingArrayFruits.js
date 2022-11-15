// Ejecuta sobre el siguiente array las operaciones pedidas:
// var fruits = ["Banana", "Manzana", "Fresa"];
//Añadimos cereza al principio
//Añadimos melocotón al final
//Mostrar el array elemento a elemento con for clásico
//Eliminamos el primer elemento.
//Eliminamos el último elemento.
//Mostrar cada elemento con for of o for in, lo que considere más adecuado.

"use strict";

let fruits = ["Banana", "Manzana", "Fresa"];

fruits.unshift("Cereza"); // Añadir por delante
fruits.push("Melocotón"); // Añadir por detrás

document.write("Mostrando primera vez el array:<br>");
for (let i = 0; i < fruits.length; i++) {
    document.write("[" + fruits[i] + "]");
}

fruits.shift(); // elimina por delante
fruits.pop(); // elimina por detrás


document.write("<br><br>Mostrando segunda vez el array:<br>");
for (const i of fruits) {
    document.write("[" + i + "]");
}
