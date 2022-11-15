/*
Crear una función constructora Calculator que crea 
objetos con 3 métodos:
read() pide dos valores usando prompt y los guarda en las propiedades del objeto con 
los nombres a y b.
sum() devuelve la suma de estas propiedades.
mul() devuelve el producto de la multiplicación de estas propiedades.
Por ejemplo:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

"use strict";

function Calculator(){ //Define las funciones en la función constructora
    this.read = function(){
        this.a = +prompt("Introduce valor 'a'");
        this.b = +prompt("Introduce valor 'b'");
    }
    this.sum = function(){
        return this.a + this.b;
    }
    this.mul = function(){
        return this.a * this.b;
    }
}

let calculator = new Calculator;

calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );