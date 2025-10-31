//2.- Crea una función llamada "DibujarLinea3", que dibuje una línea con 3 asteriscos en la pantalla

function DibujarLinea3() {
  let linea = '';

  for (let i = 0; i < 3; i++) {
    linea += '*';
  }
  return linea;
}
