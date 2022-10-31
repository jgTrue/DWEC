/*
020iniciarSesion.js/.html: Escribe un código que pregunte por el inicio de sesión con 
propmt. Si el visitante ingresa "Admin", entonces prompt(pregunta) por una 
contraseña, si la entrada es una línea vacía o Esc – muestra “Cancelado.”, si es otra 
cadena de texto – entonces muestra “No te conozco”.
La contraseña se comprueba de la siguiente manera:
- Si es igual a “TheBoss”, entonces muestra “Bienvenido a tu reino, jefe”,
- Si es otra cadena de texto – muestra “Contraseña incorrecta”,
- Para una cadena de texto vacía o una entrada cancelada, muestra “Cancelado.”

Por favor, usa bloques anidados de if. Piensa en la legibilidad general del código.
Pista: si se le pasa una entrada vacía a un prompt, retorna una cadena de texto vacía ''. 
Presionando ESC durante un prompt devuelve null.
*/
"use strict";

let userName = prompt("Inicio de sesión:");
let userPass;

if(userName == "Admin"){

    userPass = prompt("Contraseña");

    if(userPass == "TheBoss"){
        alert("Bienvenido a tu reino, jefe.");
    }else if(userPass){
        alert("Contraseña incorrecta.");
    }else{
        alert("Cancelado.");
    }

}else if(userName){
    alert("No te conozco.");
}else{
    alert("Cancelado.");
}