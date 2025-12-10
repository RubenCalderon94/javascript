/*
1. Crea un array de elementos y muestra dichos elementos por pantalla separados por "#", ahora haz lo
mismo con uno bidimensional:
let anidado1 = ["anidado1", "anidado2", "anidado3"]
 let anidado2 = ["a1", "a2", "a3"]
 let matriz = [anidado1, anidado2]
Recorre la matriz y muestra los elementos separados por “#”, mostrando el mensaje: “Indice X:
elem1#elem2#elem3”
*/

function recorreMatriz() {
  let array1 = new Array();

  for (let i = 1; i <= 10; i++) {
    num = rand(1, 100);
    array1.push(num);
  }
  console.log(array1.join("#"));
}
