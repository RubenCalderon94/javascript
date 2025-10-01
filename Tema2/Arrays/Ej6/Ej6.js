/*
6.Escribe un script para generar un array de dos dimensiones (matriz). Se le pedirá al usuario
primero el tamaño de la matriz (que será cuadrada):
 */
function crearTabla() {
  let rdo = '<table><tr><td>&nbsp;&nbsp;</td>';
  let dimension1 = parseInt(prompt('Tamaño de la matriz'));
  //let dimension2 = parseInt(prompt("Dime numero de columnas"));

  let array1 = new Array();
  let array2 = new Array();
  let tabla = new Array();

  for (let i = 0; i < dimension1.length; i++) {
    array1.push(i);
  }
  tabla.push(dimension1);

  for (let j = 0; j < array2.length; j++) {
    array2.push(j);
  }
  tabla.push(dimension1);
}
