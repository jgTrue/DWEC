/*
022numPrimos.js/.html: Un número entero mayor que 1 es llamado primo si no puede 
ser dividido sin un resto por ningún número excepto 1 y él mismo. En otras palabras, n 
> 1 es un primo si no puede ser divido exactamente por ningún número excepto 1 y n.
Por ejemplo, 5 es un primo, porque no puede ser divido exactamente por 2, 3 y 4.

Escribe el código que muestre números primos en el intervalo de 2 a n.
Para n = 10 el resultado será 2, 3, 5, 7.
PD. El código debería funcionar para cualquier n, no debe estar programado para 
valores fijos.
¿Puedes hacerlo con los 3 tipos de bucle? Demuéstralo.
*/

"use strict";

let n = prompt("Introduce un número par definir el intervalo.");
let numerosPrimos = [];
let primo = true;

/*
*Hallar números primos bucles Do...While
do {
    primo = true;
    let divisor = (n-1);

    do {
        if(n % divisor == 0 && divisor > 1){
            primo = false;
        }
        divisor--;
    } while (divisor >= 2);

    if(primo){
        numerosPrimos.push(n);
    }  
    n--;
} while (n > 1);
*/

/*
*Hallar números primos bucles While
while(n > 1){
    primo = true;
    let divisor = (n-1);
    
    while(divisor >= 2){
        
        if(n % divisor == 0){
            primo = false;
        }
        divisor--;
        
    }
    if(primo){
        numerosPrimos.push(n);
    }  
    n--;
    
}
*/
/*
*Hallar números primos bucles For
for (let numero = n; numero > 1; numero--) {
    
    primo = true;
    
    for (let divisor = (numero-1); divisor >= 2; divisor--){
        if(numero % divisor == 0){
            primo = false;
        }
    }
    if(primo){
        numerosPrimos.push(numero);
    }  
}
*/
/*
*Hallar números primos bucles foreach
let numeros = Array.from({length:n}, (v, i) => i+1);
numeros.sort((a, b) => b - a);

numeros.forEach(num => {
    primo = true;
    numeros.forEach(divisor => {
        if(divisor < num && divisor > 1){
            if(num % divisor == 0){
                primo = false;
            }
        }
    });
    if(primo && num > 1){
        numerosPrimos.push(num);
        
    }
});
*/
// Mostrar en el documento HTML
document.write("<p>");
numerosPrimos.forEach(num => {
    console.log(num);
    document.write(num+"\t");
});
document.write("</p>");