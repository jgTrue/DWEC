/*
016logicos.js/.html: ¿Cuál será el resultado de las siguientes operaciones?

alert( null || 2 || undefined ); //? Devuelve el primer valor verdadero que encuentra, en este caso es -> 2
alert( alert(1) || 2 || alert(3) ); //? Realiza alert(1) pero no puede compararlo, hasta que encuentra 2 que es el valor verdadero -> 2
alert( 1 && null && 2 ); //? Encuentra el primer valor falso y lo retorna -> null
alert( alert(1) && alert(2) ); //? No puede comparar ningún valor, realiza alert pero muestra undefined debido a no poder comparar -> undefined

alert( null || 2 && 3 || 4 ); //? La precedencia del operador AND  es mayor que la de OR, por tanto no encuentra valor falso entre 2 y 3, se queda con el último valor retornandolo -> 3

*/
