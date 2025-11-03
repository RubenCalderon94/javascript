/*
1.- Escribe un script con, al menos, estos valores: 3, 3.5, “3”, "3.5", “7aaa”, “aaa7” y “hola”. Recorre el
array y muestra por consola el resultado de aplicar las funciones parseInt, parseFloat, isNan, Number y
String, a cada uno de los elementos del array. ¿Hay algún resultado que no esperabas?
*/

function ejercicio1() {
  let valores = [3, 3.5, "3", "3.5", "7aaa", "aaa7", "hola"];

  for (let valor of valores) {
    console.log(`Valor original: ${valor}`);

    console.log("parseInt:", parseInt(valor));
    console.log("parseFloat:", parseFloat(valor));
    console.log("isNaN:", isNaN(valor));
    console.log("Number:", Number(valor));
    console.log("String:", String(valor));

    console.log("---------------------------");
  }
}

//2.- Crea una función llamada "DibujarLinea3", que dibuje una línea con 3 asteriscos en la pantalla

function DibujarLinea3() {
  let linea = "";

  for (let i = 0; i < 3; i++) {
    linea += "*";
  }
  return linea;
}

/*
3.- Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado (en la pantalla) formado por
3 filas con 3 asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior).
*/

function DibujarCuadrado3x3() {
  let linea = "";
  for (let i = 0; i < 3; i++) {
    linea = linea + DibujarLinea3() + "\n";
  }
  alert(linea);
}

/*
4.- Crea una función llamada "DibujarLinea", que dibuje una línea con X asteriscos (en la pantalla). La
función tendrá un parámetro de entrada con el número de asteriscos a mostrar.
*/

function ejercicio4() {
  let numero = parseInt(prompt("Introduce numero de asteriscos"));
  DibujarLinea(numero); //Llamamos a la funcion y le metemos el parametro que arriba el usuario a introducido
}

function DibujarLinea(numero) {
  linea = "";
  for (let i = 0; i < numero; i++) {
    linea = linea + "*";
  }
  alert(linea);
}

/*
5.- Crea una función llamada "DibujarCuadrado", que dibuje un cuadrado formado por X filas con X
asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior). El script
pedirá al usuario el tamaño del cuadrado, y llamará a la función con ese dato.
*/

function DibujarCuadrado() {
  let asteriscos = parseInt(prompt("Introduce numero de asteriscos:"));
  let filas = parseInt(prompt("Introduce numero de filas:"));
  DibujarLinea(asteriscos, filas);
}

function DibujarLinea(asteriscos, filas) {
  linea = "";
  for (let i = 0; i < asteriscos; i++) {
    for (let i = 0; i < filas; i++) {
      linea = linea + "*";
    }
    // Añadir salto de línea al final de cada fila
    linea = linea + "\n";
  }
  alert(linea);
}

/*
6.- Crea una función "DibujarRectangulo" que dibuje en pantalla un rectángulo del ancho y alto que se
indiquen como parámetros. El script pedirá al usuario el tamaño del rectángulo, y llamará a la función con
ese dato.
*/

//El ejercicio 5 es igual

/*
7.- Crea una función "Cubo" que devuelva el cubo de un número real que se indique como parámetro. La
función tendrá que comprobar que el parámetro es un número (o que se pueda convertir a un número), en
caso contrario, devolverá false.
Prueba esta función para calcular el cubo de 3.2 y el de 5, y también prueba a pasarle “hola” como
parámetro. ¿Qué ocurre?
*/

function comprobarNumero() {
  let num = parseInt(prompt("Introduce un numero"));
  // Comprobamos si NO es un número válido
  if (isNaN(num)) {
    alert("Error: Debes introducir un número válido.");
  }
  resultado = cubo(num);
  alert(resultado);
}

function cubo(numero) {
  return numero * numero * numero;
}

/*
8.- Crea una función "Menor" que devuelva el menor de dos números que recibirá como parámetros.
*/

function Menor() {
  let num1 = parseInt(prompt("Introduce un numero"));
  let num2 = parseInt(prompt("Introduce un numero"));
  resultado = comprobarMenor(num1, num2);
  alert("El numero menor es el: " + resultado);
}

function comprobarMenor(numero1, numero2) {
  let minimo = Math.min(numero1, numero2);
  return minimo;
}

/*
9.- Crear 4 funciones: PideNumero, EsPositivo, CalculaMitad y HazTodo
La función PideNumero, pedirá al usuario que introduzca un número y devuelve el número introducido
Las funciones EsPositivo y CalculaMitad, no imprimen nada en la consola, simplemente devuelven los
valores correspondientes.
La función HazTodo no tendrá ningún parámetro, llamará a las otras tres funciones y mostrará la
siguiente información en la consola:
‘El número X es POSITIVO/NEGATIVO’
‘La mitad de X es Y’
Fuera de las funciones, solo habrá una llamada a la función HazTodo
*/

function PideNumero() {
  let num = parseInt(prompt("Introduce un numero"));
  return num;
}

function EsPositivo(numero) {
  return numero >= 0;
}

function CalcularMitad(numero) {
  resultado = numero / 2;
  return resultado;
}

function HazTodo() {
  let num = PideNumero(); //De esta funcion el numero que introduzca arriba, me lo guarda ahora en num
  let positivo = EsPositivo(num); //pasamos el numero num
  let mitad = CalcularMitad(num); //pasamos el numero num

  if (positivo) {
    console.log(`El número ${num} es POSITIVO`);
  } else {
    console.log(`El número ${num} es NEGATIVO`);
  }

  console.log(`La mitad de ${num} es ${mitad}`);
}

/*
11.- Escribe una función que dado un string, devuelva un array con las palabras que forman el string.
¿Qué pasa si el string tiene 3 espacios en blanco seguidos? ¿Se puede solucionar?
*/

function DevulveArray() {
  let mensaje = prompt("Escribe un mensaje, lo transformaremos a un array");
  let arrayPalabras = mensaje.split(" "); //el metodo split, lo separa palabra a palabra

  alert(arrayPalabras);
}

/*
12.- Escribe una función que se le pase un nombre completo (string) y devuelve el nombre abreviado (es
decir, el nombre y la primera letra del primer apellido, seguido de un punto). Escribe también el código
necesario para probarla.
*/

function escribeNombre() {
  let nombre = prompt("Escribe tu nombre completo");
  nombreAbreviado(nombre);
}

function nombreAbreviado(nombre) {
  // Eliminamos espacios sobrantes y separamos el nombre por espacios
  let partes = nombre.trim().split(" ");

  // Tomamos el primer nombre y el primer apellido
  let nombrePrimero = partes[0];
  let apellidoPrimero = partes[1] || ""; // por si no hay apellido

  // Creamos el nombre abreviado
  let abreviado =
    nombrePrimero + " " + apellidoPrimero.charAt(0).toUpperCase() + ".";

  return alert(abreviado);
}

/*
13.- Crea una función que oculte parte de una dirección de email. Por ejemplo, si se le pasa
“1234567890@gmail.com”, devolverá “12345…@gmail.com”, es decir, sustituye la 2ª mitad del email
(antes de la @) por “...”. Escribe también el código necesario para probarla.
*/

function escribeEmail() {
  let email = prompt("Escribe tu email completo");
  ocultaEmail(email);
}

function ocultaEmail(email) {
  let [nombre, dominio] = email.split("@");
  let mitad = Math.floor(nombre.length / 2);
  let resultado = nombre.slice(0, mitad).padEnd(mitad + 3, ".") + "@" + dominio;
  // Mostramos la primera mitad y usamos padStart para añadir los tres puntos
  //("1234567890@gmail.com")); // "12345...@gmail.com"

  return alert(resultado);
}

/*
14.- Define una función que sustituya los espacios en blanco por un guión y, además, convierta todo el
texto en minúsculas. Escribe también el código necesario para probarla.
*/

function frase() {
  let mensaje = prompt("Escribe una frase");
  convierteFrase(mensaje);
}

function convierteFrase(mensaje) {
  let arrayPalabras = mensaje.toLowerCase().replaceAll(" ", "-"); //replaceAll, cambia los espacios por guiones
  // Reemplaza todos los espacios por guiones y convierte a minúsculas

  return alert(arrayPalabras);
}

/*
15.- Escribe una función que reciba dos parámetros, string1 y string2, y que devuelva true si string1
contiene a string2, o false en caso contrario.
*/

function frase1() {
  let string1 = prompt("Escribe la primera palabra");
  let string2 = prompt("Escribe la segunda palabra");
  let resultado = dosString(string1, string2);
  console.log(resultado);
}

function dosString(string1, string2) {
  return (resultado = string1.includes(string2));
}

/*
16.- Crea una función que genere un número aleatorio, entre dos valores dados. Utiliza esta función para
simular el funcionamiento de un dado.
*/

function aleatorio() {
  let valor1 = parseInt(prompt("Escribe el primer numero:"));
  let valor2 = parseInt(prompt("Escribe el segundo numero:"));
  dado(valor1, valor2);
}

function dado(a, b) {
  let min = Math.min(a, b); //comprobamos cual es el valor minimo.
  let max = Math.max(a, b); //comprobamos cual es el valor maximo
  let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; //Nos genera un numero al random, entre valor1 y valor2
  //introducido por usuario
  alert(numeroAleatorio);
}

/*
17.- Define una función que devuelva una cadena de texto con el día actual. Además, hay que pasarle el
separador. Suponiendo que el separador es “-”, el formato de salida será “dd-mm-yyyy”
*/

function diaActual() {
  let fecha = new Date();
  let diaDelMes = fecha.getDate(); // Día del mes actual
  let diaMes = fecha.getDay(); // Día de la semana actual
  let año = fecha.getFullYear(); // Año actual
  console.log(`Hoy es: ${diaDelMes}-${diaMes}-${año}`);
}

/*
18.- En una empresa las facturas vencen a los 20 días. Crear una función que tendrá como parámetro una
fecha con el formato 'dd-mm-YYYY' y devolverá la fecha de vencimiento (con el mismo formato). Hay
que tener en cuenta que, si la fecha de vencimiento cae en fin de semana, habrá que mostrar la fecha del
viernes anterior
*/

function dimeFecha() {
  let fechaTexto = prompt("Introduce la fecha en formato dd-mm-YYYY");
  return fechaTexto;
}

function fechaVencimiento(fechaTexto) {
  // Dividimos el texto en partes
  let partes = fechaTexto.split("-"); // ejemplo: ["03","11","2025"]
  let dia = parseInt(partes[0]);
  let mes = parseInt(partes[1]) - 1; // en JS los meses van de 0 a 11
  let año = parseInt(partes[2]);

  // Creamos la fecha original
  let fecha = new Date(año, mes, dia);

  // Sumamos 20 días
  fecha.setDate(fecha.getDate() + 20);

  // Comprobamos el día de la semana (0=domingo, 6=sábado)
  let diaSemana = fecha.getDay();

  if (diaSemana === 6) {
    // sábado -> restamos 1 día
    fecha.setDate(fecha.getDate() - 1);
  } else if (diaSemana === 0) {
    // domingo -> restamos 2 días
    fecha.setDate(fecha.getDate() - 2);
  }

  // Formateamos para mostrar dd-mm-YYYY
  let diaFinal = String(fecha.getDate()).padStart(2, "0"); //asegura que tenga 2 caracteres, y si le falta uno, pone un "0" al principio.
  let mesFinal = String(fecha.getMonth() + 1).padStart(2, "0"); //asegura que tenga 2 caracteres, y si le falta uno, pone un "0" al principio.
  let añoFinal = fecha.getFullYear(); //Devuelve el año completo (por ejemplo 2025).

  return `${diaFinal}-${mesFinal}-${añoFinal}`;
}

function hazTodo() {
  let fechaEnTexto = dimeFecha();
}
