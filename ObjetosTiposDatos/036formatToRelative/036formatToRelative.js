/*
Cambia el formato a fecha relativa. Escribe una función 
formatDate(date) que muestre la fecha en el siguiente formato:
Si a partir de la fecha date pasó menos de 1 segundo, debe devolver "ahora mismo".
De no ser así, si a partir de la fecha date pasó menos de 1 minuto, debe retornar "hace 
n seg,".
De no ser así, si pasó menos de una hora, debe devolver "hace n min.".
De no ser así, debe retornar la fecha completa en el formato "DD.MM.AA HH:mm". Es 
decir: "día.mes.año horas:minutos", cada uno de ellos en formato de 2 dígitos, por ej. 
31.12.16 10:00.
*/

"use strict";

let date = new Date("2021","5", "4", "11");

alert(formatDate(date));


function formatDate(date){
  
    let deference = new Date() - date; // Differencia de fechas

    // Descompone la fecha agregando un cero por si es necesario
    let DD = "0" + date.getDate(); //(día))
    let MM = "0" + date.getMonth(); //(mes)
    let YY = "" + date.getFullYear(); //(año) Se convierte a string
    let hh = "0" + date.getHours(); //(horas)
    let mm ="0" + date.getSeconds(); //(minutos)

    if (+deference < +1000){ //Comprueba si es menos que un segundo
        return "ahora mismo."
    }
        
    else if ((Math.floor(+deference / +1000)) < +60){ // Comprueba menos de un minuto
        return "hace " + Math.floor(+deference / +1000) + "seg."
    }
        
    else if ((Math.floor(+deference / +60000)) < 60){ // Comprueba menos de una hora
        return "hace " + Math.floor(+deference / +60000) + "min."
    }
    
    else{
        //Devuelve fecha actual con formato, cogiendo los dos últimos elementos.
        return  DD[DD.length-2] + DD[DD.length-1] +
                "." + MM[MM.length-2] + MM[MM.length-1] +
                "." + YY[YY.length-2] + YY[YY.length-1] +
                " " + hh[hh.length-2] + hh[hh.length-1] +
                ":" + mm[mm.length-2] + mm[mm.length-1];
    }
}