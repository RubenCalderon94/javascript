/*3. Crea un array de 100 elementos. El valor del primer elemento será 1, valor del segundo elemento
será 2, y así sucesivamente, de tal forma que el último elemento del array tendrá el valor 100.
Calcula la media de todos los elementos del array.*/

let array = new Array(); //Declaramos el array e instanciamos
let suma = 0;
let media = 0;

for (let i = 0; i < 100; i++) {
  //Primer for para ir rellenado el array
  array.push(i + 1);
}

for (let j = 0; j <= array.length - 1; j++) {
  //Segundo for para imprimir el array
  suma += array[j];
  media = suma / array.length;
  console.log('Mostramos los numeros que rellenan el array: ' + array[j]);
}
console.log('La media es: ' + media);
