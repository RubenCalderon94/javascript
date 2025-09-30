/*
2. Crea un programa que pregunte al usuario cuantos números va a introducir (por ejemplo, 5), le
pida todos esos números, los guarde en un array y finalmente calcule y muestre la media de esos
números.
*/

let array = new Array(); //Declaramos el array e instanciamos
let contador = 0;
let num1 = parseInt(prompt('¿Cuantos numeros vas a introducir?'));
let suma = 0;
let media = 0;
do {
  let num2 = parseInt(prompt('Introduce los numeros'));
  array.push(num2);
  contador++;
} while (contador != num1);

for (let i = 0; i < array.length; i++) {
  console.log('Los numeros introducidos son: ' + array[i] + ' ,');
  suma += array[i];
  media = suma / array.length;
}
console.log('La media de los nuemeros es: ' + media);
