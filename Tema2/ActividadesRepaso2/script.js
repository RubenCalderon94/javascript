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

/*
Ejercicio 6. Nos han encargado realizar un programa para el recuento de votos de las
mejores luces de navidad de Extremadura, para ellos nos dan un array donde está el
nombre del pueblo y el número de puntos asignados. Como los puntos vienen de
distintas entidades y organismos para su recogida, puede haber la misma ciudad
repetida varias veces, por lo que sumaremos los puntos a la misma ciudad. Ejemplo, si
nos dan el array: Zafra-8puntos, Mérida-23puntos, Badajoz-13puntos, Zafra-4puntos,
Mérida-1punto. Debemos mostrar que Zafra ha obtenido 12 puntos, Mérida 24 puntos
y Badajoz 13 puntos.
7.1. Ordenar las ciudades para que se muestren según sus puntos de mayor a menor,
en el ejemplo anterior se mostraría: Mérida: 24 puntos, Badajoz: 13 puntos y Zafra: 12
puntos. Mostrar al usuario el resultado en una ventana emergente.
Código necesario:
Array de puntos:
["Zafra-8puntos", "Mérida-23puntos", "Badajoz-4puntos", "Zafra-3puntos",
"Almendralejo-12puntos", "Mérida-4puntos", "Badajoz-15puntos", "Zafra-2puntos",
"Mérida-7puntos", "Zafra-11puntos", "Almendralejo-31puntos", "Aceuchal-3puntos",
"Almendralejo-7puntos", "La Parra-17puntos", "Aceuchal-15puntos", "Zafra-6puntos"] */

function contarPuntos() {
  let repetidos = [
    "Zafra-8puntos",
    "Mérida-23puntos",
    "Badajoz-4puntos",
    "Zafra-3puntos",
    "Almendralejo-12puntos",
    "Mérida-4puntos",
    "Badajoz-15puntos",
    "Zafra-2puntos",
    "Mérida-7puntos",
    "Zafra-11puntos",
    "Almendralejo-31puntos",
    "Aceuchal-3puntos",
    "Almendralejo-7puntos",
    "La Parra-17puntos",
    "Aceuchal-15puntos",
    "Zafra-6puntos",
  ];

  let arrayNuevo=[];

  for (const valor of repetidos) {
    partes=valor.split("-");
    let ciudad = partes[0];
    let arrayPuntos = partes[1].split("p");
    let puntos = arrayPuntos[0]

  };






  
  




}
