/*
Cuáles son los resultados de estas expresiones?
"" + 1 + 0 //? Se concatena el texto -> "10"
"" - 1 + 0 //? Se motrará -1 como número
true + false //? Se muestra 1 de tipo número, ya que es  1 + 0;
6 / "3" //? Se ejecuta la operación -> 2
"2" * "3" //? Se ejecuta la operación -> 6
4 + 5 + "px" //? Se ejecuta la operación y la concatenación -> "9px"
"$" + 4 + 5 //? Se ejecuta la concatenación -> "$45"
"4" - 2 //? Se ejecuta la operación -> 2
"4px" - 2 //? Intenta hacer la operación pero arroja -> NaN (Not a Number) 
"  -9  " + 5 //? 
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
*/
let calculo = "  -9  " + 5;
alert(calculo);
