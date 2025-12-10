/*4. Un programa que pida al usuario 10 números, calcule su media y luego muestre los que están por
encima de la media.
*/

let array = new Array(); //Declaramos el array e instanciamos
let arraysuperiormedia = new Array(); //Declaramos el array e instanciamos
contador = 10;
let suma = 0;
let media = 0;

do {
  let num = parseInt(
    prompt(
      "Introduce un numero, te quedan " + contador + " numeros por introducir"
    )
  );
  array.push(num); //Vamos guardando los numeros que el usuario va introduciendo
  contador--;
} while (contador != 0);

for (let i = 0; i < array.length; i++) {
  //Recorremos array para ver los numeros introducidos
  suma += array[i];
  media = suma / array.length;
  console.log("Los numeros introducidos son: " + array[i]);
}
console.log("La media es: " + media);

for (let j = 0; j < array.length; j++) {
  //Volvemos a reccorres el array con los numeros introducidos y vamos comparando
  //cual es mayor a la media
  if (array[j] > media) {
    arraysuperiormedia.push(array[j]); //Los que superan la media los guardamos en un nuevo array
  }
}
for (let b = 0; b < arraysuperiormedia.length; b++) {
  //Recorremos el nuevo array para ver los numeros que superan la media
  console.log("Los numeros superior a la media son: " + arraysuperiormedia[b]);
}
