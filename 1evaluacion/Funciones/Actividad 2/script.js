//1. Función que defina una variable cadena con "hola que tal yo bien" y busque "tal" para mostrar la cadena
//desde "tal" al final.

/*function mostrarCadenaDesde() {
  let cadena = "hola que tal yo bien";
  let porcion = cadena.substring(8);
  alert(porcion);
*/
//OTRA FORMA MAS FACIL, SIN CONTAR A MANO

function mostrarCadenaDesde() {
  let cadena = "hola que tal yo bien";
  let indice = cadena.indexOf("tal");
  alert(cadena.substring(indice));
}

//2. Función que defina una cadena, la corte y la meta en un array. Luego debe recorrer el array e indicar
//que en el índice X del array está tal cadena

function defineCadena() {
  let cadena = "hola que tal bien";
  let palabras = cadena.split(" ");

  for (const indice in palabras) {
    alert(`En el indice ${indice} esta la cadena ${palabras}`);
  }
}
