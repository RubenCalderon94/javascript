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
    let usuario = parseInt(prompt('Escribe 8 digitos, y calcularemos tu DNI'));
    let letras = [
      'T',
      'R',
      'W',
      'A',
      'G',
      'M',
      'Y',
      'F',
      'P',
      'D',
      'X',
      'B',
      'N',
      'J',
      'Z',
      'S',
      'Q',
      'V',
      'H',
      'L',
      'C',
      'K',
      'E',
    ];

    let resultado = usuario % 23;

    for (const indice in letras) {
      //recorremos el array letras, con forin, para coger posicion
      if (resultado == indice) {
        //si resultado y key(indice) son iguales me coge la letra y la guardamos abajo en let letraPosicion
        letraPosicion = letras[indice];
      } //
    }
    alert('Tu dni es: ' + usuario + letraPosicion);
  } while (usuario < 0 || usuario > 99999999);
  alert('Error');
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
    prompt('Introduce un número entero para calcular su factorial:')
  );

  // Comprobamos que sea un número válido
  if (isNaN(numero) || numero < 0) {
    alert('Número inválido. Debe ser un entero positivo o cero.');
  } else {
    let factorial = 1; // Empezamos con 1 porque multiplicar por 0 daría 0

    // Bucle para calcular el factorial
    for (let i = 1; i <= numero; i++) {
      factorial = factorial * i; // factorial = factorial * i
    }

    alert('El factorial de ' + numero + ' es: ' + factorial);
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
    alert(numero + ' Numero par');
  } else {
    alert(numero + ' Numero impar');
  }
}

function escribeNumero() {
  let usuario = parseInt(prompt('Escribe un numero'));
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
  let frase = prompt('Introduce una frase');
  if (frase === frase.toUpperCase()) {
    alert('La frase está formada sólo por MAYÚSCULAS.');
  } else if (frase === frase.toLowerCase()) {
    alert('La frase está formada sólo por minúsculas.');
  } else {
    alert('La frase tiene MAYÚSCULAS y minúsculas mezcladas.');
  }
}

/*Ejercicio 5.
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
resultado de lanzar dos dados y guardar el resultado en un array el número de apariciones de dicha
suma. Si repetimos 36.000 veces esta operación, ¿qué porcentaje sale de cada suma?
*/

function dado() {
  let arrayResultado = new Array(); //array para guardar resultados
  let arrayApariciones = new Array(); //array que nos va a valer como contador en vez de variable numero, en variable array

  // Inicializamos apariciones de 2 a 12 en 0
  for (let i = 2; i <= 12; i++) {
    arrayApariciones[i] = 0; //inicializamos en 0
  }

  for (let i = 1; i <= 36000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let resultado = dado1 + dado2;
    arrayResultado.push(resultado);
    arrayApariciones[resultado]++; // contamos la suma
  }

  // Mostramos el porcentaje de cada suma
  for (let i = 2; i <= 12; i++) {
    let porcentaje = (arrayApariciones[i] / 36000) * 100;
    console.log('Suma ' + i + ': ' + porcentaje.toFixed(2) + '%');
  }
}

/*
Ejercicio 6.
Hacer un trivial sencillo. El funcionamiento del programa será el siguiente:
- Te doy los arrays enunciados, respuestas y soluciones.
enunciados[n] = ‘Enunciado de la pregunta’;
respuestas[n] = array(‘respuesta 1’,’respuesta 2’,’respuesta 3’,’respuesta 4’);
solucion[n] = indice; // Indice de la respuesta correcta
- Crear una función: preguntaSimple
○ Recibe como parámetros un texto (con el enunciado de la pregunta), un array (con las
posibles respuestas) y número (indica número del elemento del array que tiene la respuesta correcta)
○ Esta función genera un prompt con el enunciado y las respuestas, y el usuario tiene que
indicar el ‘número de la respuesta correcta’. 
○ Devuelve true si ha acertado y false en caso contrario.
● El programa elegirá 5 preguntas (de las 10) al azar(sin repetir la misma pregunta) y se las irá preguntando al
usuario.
● Al terminar, el programa mostrará un mensaje indicando la puntuación de respuestas
acertadas.
● Y, por último, le pregunta al usuario si quiere volver a jugar.
*/

function preguntaSimple() {
  let enunciados = [
    '¿Cuál es el río más largo del mundo?',
    '¿En qué año llegó el ser humano a la Luna?',
    '¿Cuál es la capital de Australia?',
    '¿Quién pintó La última cena?',
    '¿Cuál es el metal más abundante en la corteza terrestre?',
    '¿Qué país tiene la mayor población del mundo?',
    '¿En qué continente se encuentra la cordillera de los Andes?',
    '¿Qué científico propuso la teoría de la relatividad?',
    '¿Cuál es el océano más grande del planeta?',
    '¿Qué país inventó la pólvora?',
  ];

  let respuestas = [
    ['Amazonas', 'Nilo', 'Yangtsé', 'Misisipi'],
    ['1965', '1969', '1972', '1959'],
    ['Sídney', 'Camberra', 'Melbourne', 'Perth'],
    ['Miguel Ángel', 'Leonardo da Vinci', 'Rafael', 'Caravaggio'],
    ['Hierro', 'Cobre', 'Aluminio', 'Plata'],
    ['India', 'Estados Unidos', 'China', 'Indonesia'],
    ['Asia', 'América', 'Europa', 'África'],
    ['Isaac Newton', 'Albert Einstein', 'Nikola Tesla', 'Galileo Galilei'],
    ['Atlántico', 'Índico', 'Ártico', 'Pacífico'],
    ['China', 'Japón', 'Corea', 'India'],
  ];

  let solucion = [1, 2, 2, 2, 3, 3, 2, 2, 4, 1];

  do {
    let aciertos = 0;

    let arrayCompleto = []; //aqui creo un array vacio que es donde voy a meter cuando lo vaya guardando abajo, al recorrerlo y usar el push

    for (let indice in enunciados) {
      //aqui recorremos y vamos guardando los indices en el array arrayCompleto
      arrayCompleto.push([
        enunciados[indice],
        respuestas[indice],
        solucion[indice],
      ]);
    }
    let preguntaFinal = new Set(); //creamos un set para despues obtener las 5 preguntas sin repetir

    // Generamos 5 índices aleatorios únicos
    while (preguntaFinal.size < 5) {
      let randomIndex = Math.floor(Math.random() * arrayCompleto.length);
      preguntaFinal.add(randomIndex);
    }
    for (const valor of preguntaFinal) {
      //aqui recorremos para que nos salga imprimido el array completo
      const [enunciado, respuestas, solucion] = arrayCompleto[valor];

      // Construir el texto del prompt
      let texto = enunciado + '\n';
      let contador = 1;
      for (let clave of respuestas) {
        texto += contador + '. ' + clave + '\n';
        contador++;
      }
      // Mostrar al usuario y recoger respuesta
      let respuestaUsuario = parseInt(prompt(texto));

      // Comprobar si acertó
      if (respuestaUsuario === solucion) aciertos++;
    }

    alert('Has acertado: ' + aciertos + ' de 5 preguntas');
  } while (confirm('¿Quieres volver a jugar?'));
}
