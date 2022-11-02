/*001requiredElse.js/.html: ¿Es "else" requerido? 
//? Realmente no es requerido.
La siguiente función devuelve true si el parámetro age es mayor a 18. De lo contrario, 
solicita una confirmación y devuelve su resultado:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('¿Tus padres te permitieron?');
  }
}
¿Funcionará la función de manera diferente si se borra else? ¿Hay alguna diferencia en 
el comportamiento de estas dos variantes?*/
//? Fundionará exactamente igual, si se cumple la condición hará 'return true' y se acabará la función.
//? Si no se cumple continuará la ejecución y retornaría 'return confirm' sin necesidad de estar encapsulado en un 'else'.
/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } 
      
    return confirm('¿Tus padres te permitieron?');
    
}
*/