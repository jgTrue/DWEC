/*
Crear un array que contenga los 20 primeros números de 
Fibonacci.
*/

"use strict";

const fibonacci = [1,1];

for (let i = 2; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

alert(fibonacci);