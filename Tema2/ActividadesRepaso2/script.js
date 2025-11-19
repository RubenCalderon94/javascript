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
  let nombreUsuario = prompt("Introduce tu nombre");

  let inicioNombre = nombreUsuario.slice(0, 3); //con slice la palabra introducida obtiene esas posiciones

  let cantidadAsteriscos = nombreUsuario.length - 3;

  let asteriscos = "*".repeat(cantidadAsteriscos);

  let total = inicioNombre + asteriscos;

  alert(total);
}

/*
Ejercicio 4. Crear un ejercicio que pida el número de divs a mostrar y cuántos párrafos
tendrán dichos divs. Se deberá escribir en pantalla los divs con una clase que definas
que lo que haga sea poner un color de fondo y un margen inferior de 10px para
separar los divs y dentro de cada div tantos párrafos con el texto Parrafo X donde X
será las veces que ha aparecido, por ejemplo: Parrafo:1, Parrafo:2...
 */

function numerosDiv() {
  let divs = parseInt(prompt("Introduce numeros de divs"));
  let parrafos = parseInt(prompt("Introduce numeros de parrafos"));

  let rdo = ""; //cramos la variable vacia, luego la vamos a utilizar

  for (let i = 1; i <= divs; i++) {
    //recorremos el numero de divs que el usuario introduce
    rdo += '<div style="background-color:red; margin-bottom:10px;">'; //cada vuelta le vamos sumando 1 mas
    for (let j = 1; j <= parrafos; j++) {
      // recorremos el numero de parrafos

      rdo += "<p> Parrafo:" + j + "</p>"; ////cada vuelta le vamos sumando 1 mas
    }

    rdo += "</div>"; //cerramos el bucle y la variable rdo
  }

  document.getElementById("divs").innerHTML = rdo;
  //esto es para meter dentro de div
}

/*
Ejercicio 5. Nos dan un array con los números de la ONCE de los últimos 10 días:
“12345”,“00124”,“04586”,“98472”,“71920”,“54102”,“00013”,“29863”,“10978”,“47101”
Se debe pedir al usuario que inserte el número que quiere comprobar y mostrará “El
número X ha sido premiado en los últimos 10 días” o “El número X no ha sido
premiado. Sigue intentándolo”.
Hay que tener en cuenta que el usuario puede poner el número “13” y el programa
mostrará que sí ha salido premiado, por lo que habrá que controlar los ceros a la
izquierda: Si el usuario pone “13” el mensaje será “El número 00013 ha sido
premiado….
 */

function insertaNum() {
  let arrayComprobar = new Array(
    "12345",
    "00124",
    "04586",
    "98472",
    "71920",
    "54102",
    "00013",
    "29863",
    "10978",
    "47101"
  );

  let usuario = prompt("Inserta tu numero:");

  let usuarioPadstar = usuario.padStart(5, "0");

  let rdo = "";

  for (const valor of arrayComprobar) {
    if (valor == usuarioPadstar) {
      rdo = "El numero ha sido premiado";
      break; // ← IMPORTANTE NECESITA EL BREAK SI NO DA ERROR,
    } else {
      rdo = "El numero no ha sido premiado";
    }
  }
  document.getElementById("numeros").innerHTML = rdo;
  //esto es para meter dentro de div
}
