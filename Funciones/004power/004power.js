/*
004power.js/.html: Función pow(x,n): Escriba la función pow(x,n) que devuelva x como 
potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el 
resultado.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Cree una página web que solicite x y n, y luego muestre el resultado de pow(x,n).
Nota: La función solo debe admitir valores naturales de n: enteros desde 1.
*/

"use strict";
let x;
let n;

do {
    x = +prompt("Introduce número base");
    n = +prompt("Introduce número exponente");
} while (n<1);

alert(pow(x,n));

function pow(x,n){
    return x ** n;
}