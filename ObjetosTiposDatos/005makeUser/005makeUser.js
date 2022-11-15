/*
Aquí la función makeUser devuelve un objeto. ¿Cuál es el 
resultado de acceder a su atributo ref? ¿Por qué?
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name ); // ¿Cuál es el resultado?
*/
//TODO
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  let user = makeUser();
  alert( user.ref.name );

//  ¿Cuál es el resultado de acceder a su atributo ref? ¿Por qué?
//* this se refiere al objeto global, en una función se encuentra sin definir.
//* como user se ha construido mediante la función makeUser() se encuentra 'undefined'.
//¿Cuál es el resultado?
//* En la consola se muestra un error, ya que no puede leer propiedades 'undefined'.
//! ...Uncaught TypeError: Cannot read properties of undefined...