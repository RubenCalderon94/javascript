function crearTabla() {
  //tr fila y td el contenido de dentro
  let letraascii = 65;
  let rdo = '<table><tr><td>&nbsp;&nbsp;</td>';
  for (let columnas = 1; columnas < 8; columnas++) {
    //esto es para columnas
    rdo += '<td>' + String.fromCharCode(letraascii++) + '</td>';
  }
  rdo += '</tr>';

  for (let filas = 1; filas < 9; filas++) {
    rdo += '<tr>';
    for (let col = 1; col <= 8; col++) {
      if (col == 1) {
        rdo += '<td>' + filas + '</td>';
      } else {
        rdo += '<td>' + '</td>';
      }
      //esto es para las columnas
    }

    rdo += '</tr>';
  }

  rdo += '</table>';
  document.getElementById('tabla').innerHTML = rdo;
  //esto es para meter dentro de div
}
