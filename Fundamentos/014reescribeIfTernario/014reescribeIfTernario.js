/*014reescribeIfTernario.js/.html: Reescriba esta condición if usando el operador 
ternario:
let result;
if (a + b < 4) {
  result = 'Baja la ropa sucia’;
} else {
  result = 'Sube los zapatos';
}*/
let result;
let a = 1;
let b = 5;

(a + b < 4)? result = 'Baja la ropa sucia' : result = 'Sube los zapatos';

alert(result);