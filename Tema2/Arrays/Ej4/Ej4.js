/*4. Un programa que pida al usuario 10 números, calcule su media y luego muestre los que están por
encima de la media.
*/

let array = new Array(); //Declaramos el array e instanciamos
let arraysuperiormedia = new Array(); //Declaramos el array e instanciamos
contador = 10;
let suma = 0;
let media = 0;
let superiormedia = 0;

do {
  let num = parseInt(
    prompt(
      'Introduce un numero, te quedan ' + contador + ' numeros por introducir'
    )
  );
  array.push(num);
  contador--;
} while (contador != 0);

for (let i = 0; i < array.length; i++) {
  suma += array[i];
  media = suma / array.length;
  if (array[i] > media) {
    arraysuperiormedia.push(array[i]);
  }
}
console.log('Los numeros introducidos son: ' + array[i]);
console.log('La media es: ' + media);

for (let j = 0; j < arraysuperiormedia.length; j++) {
  console.log('Los numeros superior a la media son: ' + array[j]);
}
