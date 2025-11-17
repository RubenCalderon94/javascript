/*
Ejercicio 1. Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden
descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
function ejercicio1() {
  let fila = parseInt(prompt("Introduce número de filas"));
  let columnas = parseInt(prompt("Introduce número de columnas"));
  let numRellenar = fila * columnas;

  let rdo = "<table border='1'>"; // borde para que se vea

  for (let i = 0; i < fila; i++) {
    rdo = rdo + "<tr>";
    for (let j = 0; j < columnas; j++) {
      rdo += "<td>" + numRellenar + "</td>";
      numRellenar--; // decrementamos el número
    }
    rdo = rdo + "</tr>";
  }

  rdo += "</table>";
  document.getElementById("tabla").innerHTML = rdo;
}

/*
Ejercicio 2. Llamar a la función sacarAleatorio que lo que hace es iterar 10 veces y
sacar un número aleatorio entre 0 y 10, si el número aleatorio es 5, devolver en la
iteración en la que ha salido dicho número mostrando el mensaje
 "El 5 ha salido en la iteración X".
Si han pasado las 10 iteraciones y no ha salido el 5 indicarlo mostrando "No ha salido el
5"
*/

function sacarAleatorio() {
  let numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10) + 1; // un número entre 1 y 10

  if (numeroAleatorioEntre1y10 === 5) {
    alert("El nuemero aleatorio es 5: " + numeroAleatorioEntre1y10);
  } else {
    alert("El numero aleatorio no es el 5: " + numeroAleatorioEntre1y10);
  }
}

/*
Ejercicio 3. Ocultar los últimos dígitos de un nombre de usuario, quedándonos solo con
los 3 primeros y el resto que los rellene con asteriscos.
*/

function digitosOcultos() {
  let nombreUsuario = parseInt(prompt("Introduce tu nombre"));

  nombreUsuario.slice(0, 4);

  alert(nombreUsuario);
}
