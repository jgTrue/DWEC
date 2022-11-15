/*
Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.
let calculator = {
  // ... tu código ...
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
"use strict";

let calculator = {
    read(){ //define los valores pidiendolos
       this.a = +prompt("Introduce valor 'a'");
       this.b = +prompt("Introduce valor 'b'");
    },
    sum(){return this.a+this.b;}, //Devuelve suma
    mul(){return this.a*this.b;} //Devuelve multiplicación
  };

  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );