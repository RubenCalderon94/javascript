/*
Ejercicio 1. Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden
descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
function ejercicio1() {
  let fila = parseInt(prompt('Introduce número de filas'));
  let columnas = parseInt(prompt('Introduce número de columnas'));
  let numRellenar = fila * columnas;

  let rdo = "<table border='1'>"; // borde para que se vea

  for (let i = 0; i < fila; i++) {
    rdo = rdo + '<tr>'; //aqui abrimos el tr donde comienza la linea
    for (let j = 0; j < columnas; j++) {
      rdo += '<td>' + numRellenar + '</td>';
      numRellenar--; // decrementamos el número
    }
    rdo = rdo + '</tr>'; //cerramos tr donde va acabando cada linea
  }

  rdo += '</table>';
  document.getElementById('tabla').innerHTML = rdo;
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
    alert('El nuemero aleatorio es 5: ' + numeroAleatorioEntre1y10);
  } else {
    alert('El numero aleatorio no es el 5: ' + numeroAleatorioEntre1y10);
  }
}

/*
Ejercicio 3. Ocultar los últimos dígitos de un nombre de usuario, quedándonos solo con
los 3 primeros y el resto que los rellene con asteriscos.
*/

function digitosOcultos() {
  let nombreUsuario = prompt('Introduce tu nombre');

  let inicioNombre = nombreUsuario.slice(0, 3); //con slice la palabra introducida obtiene esas posiciones

  let cantidadAsteriscos = nombreUsuario.length - 3;

  let asteriscos = '*'.repeat(cantidadAsteriscos);

  let total = inicioNombre + asteriscos;

  alert(total);
}

/*OTRA FORMAAAAAAAAAAAAAAA COON SPLIIIIIIIIIIITT
function digitosOcultosSplit() {
  let nombreUsuario = prompt('Introduce tu nombre');

  let caracteres = nombreUsuario.split(""); // ["J", "u", "a", "n", "o"]

  // Guardamos los 3 primeros
  let inicio = caracteres.slice(0, 3); // ["J", "u", "a"]

  // Creamos los asteriscos
  let cantidadAsteriscos = caracteres.length - 3;
  let asteriscos = Array(cantidadAsteriscos).fill("*"); // ["*", "*"]

  // Juntamos todo
  let total = inicio.concat(asteriscos).join(""); // "Jua**"

  alert(total);
}
*/

/*
Ejercicio 4. Crear un ejercicio que pida el número de divs a mostrar y cuántos párrafos
tendrán dichos divs. Se deberá escribir en pantalla los divs con una clase que definas
que lo que haga sea poner un color de fondo y un margen inferior de 10px para
separar los divs y dentro de cada div tantos párrafos con el texto Parrafo X donde X
será las veces que ha aparecido, por ejemplo: Parrafo:1, Parrafo:2...
 */

function numerosDiv() {
  let divs = parseInt(prompt('Introduce numeros de divs'));
  let parrafos = parseInt(prompt('Introduce numeros de parrafos'));

  let rdo = ''; //cramos la variable vacia, luego la vamos a utilizar

  for (let i = 1; i <= divs; i++) {
    //recorremos el numero de divs que el usuario introduce
    rdo += '<div style="background-color:red; margin-bottom:10px;">'; //cada vuelta le vamos sumando 1 mas
    for (let j = 1; j <= parrafos; j++) {
      // recorremos el numero de parrafos

      rdo += '<p> Parrafo:' + j + '</p>'; ////cada vuelta le vamos sumando 1 mas
    }

    rdo += '</div>'; //cerramos el bucle y la variable rdo
  }

  document.getElementById('divs').innerHTML = rdo;
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
    '12345',
    '00124',
    '04586',
    '98472',
    '71920',
    '54102',
    '00013',
    '29863',
    '10978',
    '47101'
  );

  let usuario = prompt('Inserta tu numero:');

  let usuarioPadstar = usuario.padStart(5, '0');

  let rdo = '';

  for (const valor of arrayComprobar) {
    if (valor == usuarioPadstar) {
      rdo = 'El numero ha sido premiado';
      break; // ← IMPORTANTE NECESITA EL BREAK SI NO DA ERROR,
    } else {
      rdo = 'El numero no ha sido premiado';
    }
  }
  document.getElementById('numeros').innerHTML = rdo;
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
    'Zafra-8puntos',
    'Mérida-23puntos',
    'Badajoz-4puntos',
    'Zafra-3puntos',
    'Almendralejo-12puntos',
    'Mérida-4puntos',
    'Badajoz-15puntos',
    'Zafra-2puntos',
    'Mérida-7puntos',
    'Zafra-11puntos',
    'Almendralejo-31puntos',
    'Aceuchal-3puntos',
    'Almendralejo-7puntos',
    'La Parra-17puntos',
    'Aceuchal-15puntos',
    'Zafra-6puntos',
  ];

  let resultado = []; //array donde vamoss a guardar ya las ciudades sin repetir y sumando sus puntos

  for (const valor of repetidos) {
    partes = valor.split('-');
    let ciudad = partes[0];
    let arrayPuntos = partes[1].split('p');
    let puntos = Number(arrayPuntos[0]); //pasa de string el numero a entero
    if (resultado[ciudad] === undefined) {
      //Comprobamos si la ciudad existe
      resultado[ciudad] = puntos; // resultado["Zafra"] = 8;  ||Primera vez → lo creamos
    } else {
      resultado[ciudad] += puntos; // resultado["Zafra"] += 3   →   11  || Ya existe → sumamos
    }
  }

  //ahora recorrer el nuevo ARRAYASOCIATIVO llamado  resultado
  let texto = '';
  for (const indice in resultado) {
    texto +=
      'Las ciudades son: ' +
      indice +
      ' con una puntuacion de: ' +
      resultado[indice] +
      '\n';
  }
  alert(texto);
  ////////////////////////////////////////////////////////////////////////////////////
  //HASTA AQUI TENEMOS EL ARRAY POR CIUDAD SIN REPETIR Y LOS PUNTOS SUMADOS///////////
  ////////////////////////////////////////////////////////////////////////////////////

  //AHORA ORDENAMOS POR PUNTOS
  let arrayOrdenable = [];

  for (var ciudad in resultado) {
    arrayOrdenable.push([ciudad, resultado[ciudad]]);
  }

  arrayOrdenable.sort(function (a, b) {
    // ejemplo de lo que puede ser (A) Y (B)
    // a puede ser por ejemplo ["zafra", 15]
    // b puede ser por ejemplo ["merida", 22]
    //ORDENAR POR PUNTOS
    if (a[1] < b[1]) return 1; // Si a tiene menos puntos, va después
    if (a[1] > b[1]) return -1; // Si a tiene más puntos, va antes
    return 0; // Igual → no cambia
  });

  let texto2 = 'Ahora ordendas por puntos:\n';
  for (const valor of arrayOrdenable) {
    texto2 += valor + '\n'; //en forof en valor se imprime asi
  }
  alert(texto2);
}

/*
Ejercicio 7. Nos han encargado que realicemos un codificador/decodificador de
mensajes sencillo para poder transmitir los mensajes de la empresa de forma segura.
Para ello, nos dan un array donde cada letra tiene una posición en el vector fija, de
forma que, por ejemplo, si nos dan el número 5 codificado, se descodifica buscando en
la posición 5 del array, y esa será la letra descodificada. Si por ejemplo tenemos el
array:
Si son dicen que codifiquemos la palabra “CASA”, ésta debe codificarse como 4-2-6-2.
Como puede verse, los dígitos van separados por un guión. Ojo, los dígitos del array
son siempre en mayúsculas.
7.1. Crear un botón en el .html llamado “Codificar” que llame a la función de codificar
y ésta sea la que pida al usuario: ¿Qué mensaje quieres codificar?. La función recoge
los caracteres, los codifica y muestra la decodificación en una ventana emergente.
El mensaje debe mostrase como se indica, por ejemplo 4-2-6-2, sin ningún guión de
más al final. Si un carácter no se encuentra en el vector, avisar al usuario que “El
carácter X no se puede codificar” y finalice el programa sin codificar el mensaje.
7.2. Crear un botón en el .html llamado “Descodificar” que llame a la función
descodificar, que pedirá al usuario: ¿Qué mensaje quieres descodificar?. Se indica el
mensaje en el mismo formato descodificado: 4-62-6-2. Si el carácter no
se puede descodificar, que muestre al usuario el mensaje “El carácter X no se puede
descodificar” y finalice el programa sin descodificar el mensaje.
7.3. Mostrar en el .html una tabla donde se van rellenando las filas con el mensaje
codificado/descodificado, el resultado de codificar/descodificar y la fecha cuando se
realizó la codificación/decodificación. Por ejemplo:
La fecha está formateada como dia / mes / año # hora : minutos : segundos. Hay que
tener en cuenta que la hora, minuto y segundo siempre deben tener 2 dígitos, por
ejemplo, la 1 y cinco de la madrugada con 3 segundos se muestra como: 01:05:03.
Código dado:
let vectorCodificacion = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
let cadenaCodificaciones =
"<table><tr><th>Mensaje</th><th>Codificacion/Decodificación</th><th>Fecha</th><
/tr>";
*/

function codificar() {
  //prettier-ignore
  let vectorCodificacion = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
  ];

  let usuario = prompt('Que mensaje quieres codificar');
  let caracteres = usuario.split('');

  let indiceCodificar = []; // aquí vamos guardando los índices

  for (let i = 0; i < caracteres.length; i++) {
    //recorremos el array que hemos creado de caracteres
    let letra = caracteres[i].toUpperCase(); //recorre cada caracter y lo pasamos a mayúscula
    let indice = vectorCodificacion.indexOf(letra); // buscamos posición Y AQUI ES DONDE ASIGNA CADA POSICION DE CADA LETRA,
    // DEVOLVIENDO CADA NUMERO
    if (indice === -1) {
      // letra no encontrada
      alert('El carácter ' + letra + ' no se puede codificar');
      return; // termina la función
    }
    indiceCodificar.push(indice); //VAMOS GUARDANDO CADA INDICE QUE ES LA POSICION DE CADA LETRA, QUE ES LO QUE NOS INTERESA
  }

  // for (const valor of indiceCodificar) {
  let parcheadoGuion = indiceCodificar.join('-'); //AQUI EN CADA POSICION(NUMERO) LO SEPARAMOS CON UN GUION
  alert(parcheadoGuion);
  // }
}

function descodificar() {
  let vectorCodificacion = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
  ];

  let usuario = prompt(
    'Que mensaje quieres descodificar, mismo formato 4-62-6-2'
  );

  let texto = '';
  let arrayADecodificar = usuario.split('-'); //aqui estoy separando cada numero por el guion, y despues recorrere el arrayADecodificar
  //que cada posicion sera el valor del array de letras llamado (vectorCodificacion)
  for (const valor of arrayADecodificar) {
    texto += vectorCodificacion[valor];
  }
  alert(texto);
}

let cadenaCodificaciones =
  '<table><tr><th>Mensaje</th><th>Codificacion/Decodificación</th><th>Fecha</th></tr>';

function tabla(mensaje, resultado) {
  let fecha = new Date(); //creamos el objeto fecha porque vamos a usar fechas

  cadenaCodificaciones +=
    '<tr><td>' +
    mensaje +
    '</td><td>' +
    resultado +
    '</td><td>' +
    fecha.getDate() +
    '/' +
    fecha.getMonth() +
    '/' +
    fecha.getFullYear() +
    '#' +
    fecha.getHours() +
    ':' +
    fecha.getMinutes() +
    ':' +
    fecha.getSeconds().toString().padStart(2, '0') +
    '</td></tr>';

  document.getElementById('ejercicio7').innerHTML = cadenaCodificaciones;
}



/* Ejercicio 8. Nos piden hacer el juego de Piedra, Papel, Tijera, Lagarto, Spock, para ello,
nos dan un html y un css con todo lo necesario, lo único que tendremos que
implementar será la pulsación de los botones “Jugar” e “Historial”.
8.1. Al pulsar el botón “Jugar”, mostrará un símbolo aleatorio de los 5 disponibles,
dicho símbolo se nos mostrará en el HTML en el div llamado “jugador1 o jugador2”.
Como el juego podrá ampliarse a más jugadores en el futuro o más símbolos,
debemos crear una función llamada “aleatorio” que nos realizará el número aleatorio
en función del tamaño del array y nos devolverá dicho número para ser utilizado en la
función jugar.
8.2. Crear un historial de resultados del juego, cada vez que pulsemos el botón
Historial, los div llamados “historialJ1 e historialJ2” se rellenarán con los resultados de
las tiradas.
8.3. Realizar las estadísticas del juego. Se mostrará en el div “estadísticas” el número
de veces que ha salido un símbolo en particular. Lo puedes integrar en el ejercicio o
hacer uno aparte, si no has acabado el Ejercicio 3, para esto último, te doy un array de
tiradas en el fichero codigoNecesario.txt*/ 


let vectorCodificacion = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
let simbolosJuego = ["✂️", "🖖", "🧻", "🦎", "🪨"]
let historialTiradas = ["✂️", "🧻", "🦎", "🪨", "🪨", "✂️", "🖖", "🖖", "🦎", "🪨",  "🦎" ,"✂️", "🧻", "🖖", "🖖", "✂️", "✂️", "✂️", "🖖", "🦎", "🪨", "✂️", "🖖", "🧻", "🪨"]























///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Ejercicio 1 
Nos piden hacer una función llamada “comprobarIgualdad” que reciba como primer 
parámetro una cadena correctamente escrita y en el segundo parámetro una cadena 
con algún carácter erróneo. 
Debemos llamar a dicha función y si la cadena está correcta mostrar “La cadena está 
correcta”, en caso contrario mostrar “Hay problemas con la cadena: En un lu#c#ar…”, 
debe mostrar entre # el carácter incorrecto, en este ejemplo el carácter incorrecto es 
la “c”. */

function comprobarIgualdad(cadena1, cadena2) {
  let rdo = '';
  let resultado = '';

  if (cadena1 == cadena2) {
    rdo = 'Cadenas iguales';
  } else {
    for (let i = 0; i < cadena1.length; i++) {
      if (cadena1[i] !== cadena2[i]) {
        resultado +=
          'Diferencias en posicion: ' +
          i +
          '<br>' +
          ' Cadena 1 tiene: ' +
          cadena1[i] +
          '<br>' +
          ' Cadena 2 tiene: ' +
          cadena2[i] +
          '<br>'; // salto de línea para separar diferencias
      }
    }
    rdo = 'Las cadenas no coinciden: <br> ' + resultado;
  }
  document.getElementById('prueba').innerHTML = rdo;
}

function pedirCadenas() {
  let cadena1 = prompt('Escribe una frase');
  let cadena2 = prompt('Escribe la misma frase pero cambia algun caracter');

  return [cadena1, cadena2]; //hay que retornarlo asi porque si no, no deja retornar dos valores, entonces crea un array
}

function ejercicioUno() {
  let probar = pedirCadenas();
  comprobarIgualdad(probar[0], probar[1]); //como al final se crea un array para usarlo debe de ir asi
}

/*Ejercicio 2
Nos dan un array de fechas, cuyo día, mes y año están separados por guiones. Nos 
piden que hagamos una función llamada "demora” que tenga como parámetros un 
objeto fecha (inicializado con el día, mes y año del array) y el número días de la 
demora. 
Si al sumarle los días de la demora se pasa a otro mes devolverá false, en caso 
contrario true. 
Al pulsar el botón “Ejercicio 2” recorrerá todas las fechas y llamará a la función 
“demora” con, por ejemplo”, 10 días de demora y mostrará en un alert las fechas que 
se pueden demorar y las que NO se pueden demorar (en 1 solo alert). */

function demora(fecha, diasDemora) {
  // Creamos un objeto Date con la fecha
  let fechaJS = new Date(fecha.anio, fecha.mes - 1, fecha.dia); //aqui estamos creando un objeto ya fecha, donde esos parametros
  //van a ser los del array de abajo partes, por seprarlo con el split (-)

  // Sumamos los días de la demora
  fechaJS.setDate(fechaJS.getDate() + diasDemora);

  // Comprobamos si se pasó de mes
  if (fechaJS.getMonth() + 1 !== fecha.mes) {
    return false; // se pasó de mes
  } else {
    return true; // sigue en el mismo mes
  }
}

function ejercicioDos() {
  let arrayFechas = [
    '03-02-2023',
    '24-04-2023',
    '05-06-2023',
    '16-05-2023',
    '03-01-2024',
    '14-02-2024',
    '26-04-2024',
  ];
  let resultado = ''; // donde guardamos todo para el alert
  let diasDemora = 10;

  for (let i = 0; i < arrayFechas.length; i++) {
    //recorre el array
    let partes = arrayFechas[i].split('-'); //partimos por el guion
    let fechaObj = {
      dia: parseInt(partes[0]),
      mes: parseInt(partes[1]),
      anio: parseInt(partes[2]),
    };
    //llamamos aqui porque queremos mostrar todo con un aleeert
    if (demora(fechaObj, diasDemora)) {
      resultado += `${arrayFechas[i]} → se puede demorar\n`;
    } else {
      resultado += `${arrayFechas[i]} → NO se puede demorar\n`;
    }
  }

  alert(resultado);
}
