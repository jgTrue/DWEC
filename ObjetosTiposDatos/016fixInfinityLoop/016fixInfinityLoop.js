/*
Este bucle es infinito. Nunca termina, ¿por qué?
let i = 0;
while (i != 10) {
  i += 0.2;
}
*/
"use strict";

let i = 0;
while (i != 10) {
  i += 0.2;
}

//* Al sumarle un número decimal, este es impreciso, por lo que conforme se va sumando
//* acumula también la imprecisión del decimal, esto conlleva a que no sea 10 exacto nunca.