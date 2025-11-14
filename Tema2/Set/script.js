/*
Nos dan un array [5, 3, 2, 5, 5, 9, 4, 5]. Cuenta el número de elementos únicos (no repetidos) que hay.
*/

function elementosUnicos() {
  let array = [5, 3, 2, 5, 5, 9, 4, 5]; //declaramos array.
  let setArray = new Set(array); //con set nos elimina los repetidos

  console.log(setArray);
}
