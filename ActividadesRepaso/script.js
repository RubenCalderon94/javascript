/*Ejercicio 1.
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo
que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del
resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Crear un programa que le pida el usuario el dni (solo el número) y calcule la letra correspondiente.
Tendrá que comprobar que el número introducido es válido.
Si no es válido, le indicará el error y volverá a pedirlo hasta que sea válido.*/

function compruebaDNI() {
  do {
    let usuario = parseInt(prompt("Escribe 8 digitos, y calcularemos tu DNI"));
    let letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
    ];

    let resultado = usuario % 23;

    for (const indice in letras) {
      //recorremos el array letras, con forin, para coger posicion
      if (resultado == indice) {
        //si resultado y key(indice) son iguales me coge la letra y la guardamos abajo en let letraPosicion
        letraPosicion = letras[indice];
      } //
    }
    alert("Tu dni es: " + usuario + letraPosicion);
  } while (usuario < 0 || usuario > 99999999);
  alert("Error");
}

/*
Ejercicio 2.
El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los
factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1
= 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.*/

function factorial() {
  // Pedimos al usuario un número
  let numero = parseInt(
    prompt("Introduce un número entero para calcular su factorial:")
  );

  // Comprobamos que sea un número válido
  if (isNaN(numero) || numero < 0) {
    alert("Número inválido. Debe ser un entero positivo o cero.");
  } else {
    let factorial = 1; // Empezamos con 1 porque multiplicar por 0 daría 0

    // Bucle para calcular el factorial
    for (let i = 1; i <= numero; i++) {
      factorial *= i; // factorial = factorial * i
    }

    alert("El factorial de " + numero + " es: " + factorial);
  }
}

/*
Ejercicio 3.
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como
resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado
devuelto por la función.
*/

function compruebaParInpar(numero) {
  if (numero % 2 == 0) {
    alert(numero + " Numero par");
  } else {
    alert(numero + " Numero impar");
  }
}

function escribeNumero() {
  let usuario = parseInt(prompt("Escribe un numero"));
  return usuario;
}

function Ejercicio3() {
  let numero = escribeNumero();
  compruebaParInpar(numero);
}

/*Ejercicio 4.
Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo
por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function cadenaTexto() {
  let frase = prompt("Introduce una frase");
  if (frase === frase.toUpperCase()) {
    alert("La frase está formada sólo por MAYÚSCULAS.");
  } else if (frase === frase.toLowerCase()) {
    alert("La frase está formada sólo por minúsculas.");
  } else {
    alert("La frase tiene MAYÚSCULAS y minúsculas mezcladas.");
  }
}

/*Ejercicio 5.
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
resultado de lanzar dos dados y guardar el resultado en un array el número de apariciones de dicha
suma. Si repetimos 36.000 veces esta operación, ¿qué porcentaje sale de cada suma?
*/

function dado() {
  let array = new Array();

  for (let i = 1; i <= 10; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let resultado = dado1 + dado2;
    array.push(resultado);
  }
}
