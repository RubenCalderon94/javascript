/*
Crear una función que tenga como parámetro de entrada un DNI y le ponga un 0 o no al principio según
corresponda (si tiene 7 caracteres, hay que ponerle un 0 delante).
*/

function comprobarDNI() {
  let dni = prompt("Escribe tu dni");
  let resultado = cerosenDni(dni);
  alert("Tu dni es:" + resultado);
}

function cerosenDni(dni) {
  let nuevo = dni.padStart(8, "5");
  return nuevo;
}
