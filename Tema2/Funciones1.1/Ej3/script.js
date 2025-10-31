/*
3.- Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado (en la pantalla) formado por
3 filas con 3 asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior).
*/
function DibujarCuadrado3x3() {
  let linea = '';
  for (let i = 0; i < 3; i++) {
    linea += DibujarLinea3() + '\n';
  }
  alert(linea);
}
