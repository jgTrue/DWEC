/*
Prueba ejecutando esto:
alert( 9999999999999999 );
¿Qué está pasando?¿Por qué?
*/

alert( 9999999999999999 );

//* Ocurre un error en la precisión, es interpretado como un número regular
//* Tienen 64 bits, 52  para almacenar los dígitos, 11 para almacenar
//* la posición del punto decimal, y 1 bit es para el signo.