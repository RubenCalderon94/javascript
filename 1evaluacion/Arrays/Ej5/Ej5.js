/*
5. Desarrolla un programa que pedirá nombres al usuario hasta que se introduzca un nombre vacío,
momento en el que dejarán de pedirse más nombres y se mostrará en pantalla la lista de los
nombres que se han introducido ordenados alfabéticamente.
*/

let array = new Array();
let nombres;

do {
  nombres = prompt("Escribe nombres al azar");
  array.push(nombres);
} while (nombres != "");

array.sort(); //Ordena el array alfabeticamente

for (let i = 0; i < array.length; i++) {
  console.log("Los nombres introducidos ordenados son: " + array[i]);
}
