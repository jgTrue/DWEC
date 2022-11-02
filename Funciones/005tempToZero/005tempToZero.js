/*
005tempToZero.js/.html: Crear una función temporizador que reciba como parámetro 
los minutos y segundos de duración de éste, de modo, que cada segundo mostrará por 
consola el tiempo que le queda al temporizador hasta llegar a 0. La función recibirá dos 
parámetros, con los minutos y los segundos, pero en el caso que sólo le pasemos un 
parámetro, considerará que son los segundos desde donde comenzará la cuenta atrás. 
Por ejemplo:
temporizador(77); // le pasamos 77 segundos
temporizador(2,50); // le pasamos 2 minutos y 50 segundos
*/
"use strict";


temporizador(3);

function temporizador(min = 0, seg = null){
    //Si la función solo recibe un parámetro(min), lo pasará como si recibiera segundos
    if(seg == null){ 
        seg = min;
        min = 0;
    }else{//Si recibe los dos parametros, los dos se convertirán en segundos.
        seg += min *60;
    }

   
    let countdown = setInterval(() => {
        if(seg > 0){
            console.log(seg);
            --seg;
        }else{
            clearInterval(countdown);
            alert("finish"); 
        }
        },1000);

}



