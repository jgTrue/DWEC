/* 003constantes.js/.html: Examina el siguiente código:
const cumple = '18.04.1982';
const age = someCode(cumple);
Aquí tenemos una constante cumple para la fecha de cumpleaños, y la edad age, que 
también es constante.
age es calculada desde cumple con la ayuda de “cierto código” someCode(), que es una 
llamada a función que no hemos explicado aún (¡lo haremos pronto!); los detalles no 
importan aquí, el punto es que age se calcula de alguna forma basándose en cumple. 
¿Sería correcto usar mayúsculas en cumple?*/
//* No, esta práctica se utiliza en variable difíciles de recordad a modo de Alias.
//* Normalmente se aplica cuando se conoce el valor de la varible de manera previa
//* Como una variable que contenga el valor hexadecimal de un color.
//* Igualmente se podría usar las mayúsculas aunque no sería lo estictamente correcto.
//¿Y en age?
//* No, además age se calcula mediante la llamada de una función,
//* por lo que no se conoce su valor previo a la ejecución
/*¿O en ambos?
//!Ya lo respondí en la primera pregunta.
const CUMPLE = '18.04.1982'; // ¿cumple en mayúsculas?
const AGE = someCode(CUMPLE); // ¿age en mayúsculas?*/

