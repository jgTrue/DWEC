/*
019if.js/.html: ¿Cuáles de estos alerts va a ejecutarse? ¿Cuáles serán los resultados de 
las expresiones dentro de if(...)?
if (-1 || 0) alert( "primero" );
if (-1 && 0) alert( "segundo" );
if (null || -1 && 1) alert( "tercero" );
*/
'use strict'

if (-1 || 0) alert( "primero" ); // || Devuelve el primer valor verdadero, se cumple la condición porque almenos uno es 'true' y se ejecuta alert.
if (-1 && 0) alert( "segundo" ); // && Devuelve el primer valor falso, además debe cumplirse la condición, pero 0 es interpretado como falso, no se ejecuta alert.
if (null || -1 && 1) alert( "tercero" ); // -1 && 1 es true, por tanto se cumple la condición porque almenos uno de los valores evaluadoses true, se ejecuta alert.

//*Se muestra 'alert( "primero" )' y 'alert( "tercero" )'