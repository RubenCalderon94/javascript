/*
1. Crea un programa que pida al usuario 6 números y luego los muestre en orden inverso (pista: usa
un array para almacenarlos y "for" para mostrarlos).
*/

let num;
contador = 6;
let array = new Array(); //Declaramos el array e instanciamos
do {
  num = parseInt(prompt('Introduce un numero'));
  array.push(num); //Va guardando cada numero
  contador--;
} while (contador != 0);

for (let i = array.length - 1; i >= 0; i--) {
  //Recorre el array al reves,
  // porque asi lo pide el ejercicio
  console.log(array[i]); // Y lo muestra
}
