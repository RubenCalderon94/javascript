/*
6.Escribe un script para generar un array de dos dimensiones (matriz). Se le pedirá al usuario
primero el tamaño de la matriz (que será cuadrada):
 */
function crearTabla() {
  let array = new Array();
  let tabla = new Array();
  let dimension = parseInt(prompt("Tamaño de la matriz"));

  let rdo = "<table>";

  for (let filas = 0; filas < dimension; filas++) {
    for (let i = 0; i < dimension; i++) {
      array.push(i);
    }
    tabla.push(array);
  }

  rdo += "</table>";
  document.getElementById("tabla").innerHTML = rdo;
}
