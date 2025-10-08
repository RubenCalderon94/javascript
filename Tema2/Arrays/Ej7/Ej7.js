/*
7. Dado un array con elementos repetidos, escribe el código para que saber cuál es el elemento que
más veces aparece en el array.

UTILIZO EL ARRAY DEL EJERCICIO 6

*/

function crearTabla() {
  let tabla = new Array(); //Declaramos el array e instanciamos
  let dimension = parseInt(prompt('Tamaño de la matriz'));
  let rdo = '<table>'; //Empezamos en html para que se vaya creando la tabla
  let contador = 0;

  //Bucle de filas
  for (let filas = 0; filas < dimension; filas++) {
    //Se crea el numero de filas, segun el usuario haya introducido
    let array = []; //Se crea un nuevo array por cada fila.
    rdo += '<tr>'; // inicio fila

    //Bucle de columnas
    for (let col = 0; col < dimension; col++) {
      //Se crea el numero de columnas, segun el usuario haya introducido, COMO ES CUADRADA LA MATRIZ
      //SE USA EL MISMO VALOR (DIMENSION ES EL NUMERO QUE INTRODUCE EL USUARIO)
      let rellena = parseInt(
        prompt('Dime el valor de la fila ' + filas + ' y columna ' + col)
      ); //Añadimos un valor a cada columna
      array.push(rellena); //Vamos rellenando cada celda, este array se crea arriba en cada fila 1 array nuevo
      rdo += '<td>' + rellena + '</td>'; // añadimos directamente a la tabla e imprime
    }
    rdo += '</tr>'; // fin fila
    tabla.push(array); //Añade cada array en este caso seria un array por cada fila
  }

  rdo += '</table>';
  //Aqui recorremos la matriz (tabla) para ver todos los numeros y cuente cual se repite mas
  for (let i = 0; i < tabla.length; i++) {
    contador++;
  }
  document.getElementById('tabla').innerHTML =
    rdo + 'El numero que mas repite en la tabla es el: ' + contador;
}
