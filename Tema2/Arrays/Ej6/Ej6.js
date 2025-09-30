/*
6.Escribe un script para generar un array de dos dimensiones (matriz). Se le pedirá al usuario
primero el tamaño de la matriz (que será cuadrada):
 */

let dimension1 = parseInt(prompt("Tamaño de la matriz"));
//let dimension2 = parseInt(prompt("Dime numero de columnas"));

let array1 = new Array();
let array2 = new Array();
let tabla = new Array();

for (let i = 0; i < dimension1.length; i++) {
  array1.push(i);
}
tabla.push(dimension1);

for (let j = 0; j < array2.length; j++) {
  array.push(j);
}
tabla.push(dimension1);

/*

let miArrayFila1 = [ “fila1 col1”, ”fila1 col2” ]; 
let miArrayFila2 = [ “fila2 col1”, ”fila2 col2” ]; 
let miArrayTabla = [ miArrayFila1, miArrayFila2 ];

*/
