/*
7. Dado un array con elementos repetidos, escribe el código para que saber cuál es el elemento que
más veces aparece en el array.

*/

function masRepetido() {
  let miarray = ["verde", "verde", "verde", "azul", "amarillo"];
  let repeticiones = [];

  //Aqui recorremos el array para ver cual color se repite mas
  for (const valor of miarray) {
    if (repeticiones[valor] == undefined) {
      repeticiones[valor] = 1;
    } else {
      repeticiones[valor] += 1;
    }
  }
  rdo = console.log(repeticiones);

  let valorMaximo = 0;
  let indiceMaximo = "";
  for (const indice in repeticiones) {
    if (repeticiones[indice] > valorMaxaximo) {
      valorMaximo = repeticiones[indice];
      indiceMaximo = indice;
    }
  }

  document.getElementById("tabla").innerHTML = rdo;
}
