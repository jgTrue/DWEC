/*
Por qué 6.35.toFixed(1) == 6.3? Según la documentación 
Math.round y toFixed redondean al número más cercano: 0..4 hacia abajo mientras 
5..9 hacia arriba. Por ejemplo:  alert( 1.35.toFixed(1) ); // 1.4
En el ejemplo similar que sigue, ¿por qué 6.35 es redondeado a 6.3, y no a 6.4?
alert( 6.35.toFixed(1) ); // 6.3
¿Cómo redondear 6.35 de manera correcta?
*/
"use strict";
//alert( 6.35.toFixed(1) ); 
//* Al tener decimales, internamente es un binario infinito 
//* por lo que se almacena impreciso como 6.34999...


alert( Math.round(6.35 * 10) / 10); 
//* Esta es una posible solución. Se desplaza la coma '63.5', se redondea
//* y resulta en 64, luego se desplaza la coma de nuevo y obtenemos '6.4'.