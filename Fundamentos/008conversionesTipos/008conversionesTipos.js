/*
Cuáles son los resultados de estas expresiones?
"" + 1 + 0 //? Se concatena el texto -> "10"
"" - 1 + 0 //? Se motrará -1 como string, ya que las comillas hacen la conversión
true + false //? Se muestra 1 de tipo número, ya que es  1 + 0;
6 / "3" //? Se ejecuta la operación -> 2
"2" * "3" //? Se ejecuta la operación -> 6 como string
4 + 5 + "px" //? Se ejecuta la operación y la concatenación -> "9px"
"$" + 4 + 5 //? Se ejecuta la concatenación -> "$45"
"4" - 2 //? Se ejecuta la operación -> 2
"4px" - 2 //? Intenta hacer la operación pero arroja -> NaN (Not a Number) 
"  -9  " + 5 //? Concatera el String con el número -> "  -9  5"
"  -9  " - 5 //? Realiza la operación -> -14 como string
null + 1 //? Realiza la operacion null == 0 + 1 -> 1
undefined + 1 //? Intenta realizar la operación pero undefined no es un numero arroja -> NaN (Not a Number)
" \t \n" - 2 //? Hace la operación y como el string está vacio en realidad nos muestra el número -> -2 como string 
*/

