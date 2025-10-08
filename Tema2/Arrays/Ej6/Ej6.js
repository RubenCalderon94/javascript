/*
6.Escribe un script para generar un array de dos dimensiones (matriz). Se le pedirá al usuario
primero el tamaño de la matriz (que será cuadrada):

 */
function crearTabla() {
  let tabla = new Array();
  let dimension = parseInt(prompt('Tamaño de la matriz'));

  let rdo = '<table>';

  //Bucle de filas
  for (let filas = 0; filas < dimension; filas++) {
    //let array = []; //Se crea un nuevo array por cada fila.ESTO ES EN CASO PARA ALMACENAR, NO MOSTRAR AHORA
    rdo += '<tr>'; // inicio fila

    //Bucle de columnas
    for (let col = 0; col < dimension; col++) {
      let rellena = parseInt(prompt('Dime el valor a rellenar')); //Añadimos un valor a cada columna
      //array.push(rellena); SERIA EN CASO DE GUARDAR NO IMPRIMIR AHORA
      rdo += '<td>' + rellena + '</td>'; // añadimos directamente a la tabla
    }
    rdo += '</tr>'; // fin fila
    tabla.push(array);
  }

  rdo += '</table>';
  document.getElementById('tabla').innerHTML = rdo;
}
