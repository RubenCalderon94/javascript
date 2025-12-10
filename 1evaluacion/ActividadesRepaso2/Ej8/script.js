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

let simbolosJuego = ['✂️', '🖖', '🧻', '🦎', '🪨'];
let historialTiradas = [
  '✂️',
  '🧻',
  '🦎',
  '🪨',
  '🪨',
  '✂️',
  '🖖',
  '🖖',
  '🦎',
  '🪨',
  '🦎',
  '✂️',
  '🧻',
  '🖖',
  '🖖',
  '✂️',
  '✂️',
  '✂️',
  '🖖',
  '🦎',
  '🪨',
  '✂️',
  '🖖',
  '🧻',
  '🪨',
];

let historialJ1 = []; //array normal MUY CLARO SE USA PUSH
let historialJ2 = []; //array normal MUY CLARO SE USA PUSH
let estadisticas = [];

function jugar() {
  let aleatorio1 = aleatorio(); //llamamos a la funcion y sale al azar la tirada
  let aleatorio2 = aleatorio(); //aqui lo mismo pero para el otro jugador
  historialJ1.push(simbolosJuego[aleatorio1]); //añadimos al historial ya el valor
  historialJ2.push(simbolosJuego[aleatorio2]);
  document.getElementById('jugador1').innerHTML = simbolosJuego[aleatorio1]; //aqui imprimimos ya lo que ha salido al azar al jugador1
  document.getElementById('jugador2').innerHTML = simbolosJuego[aleatorio2]; //aqui imprimimos ya lo que ha salido al azar al jugador2
}

function aleatorio() {
  //AQUI CREAMOS AL AZAR LA TIRADA
  let numeroAleatorio = Math.floor(Math.random() * simbolosJuego.length);
  estadisticasTirada(simbolosJuego[numeroAleatorio]); //aqui al llamar a la funcion lo que hacemos es ir añadiendo cada elemento
  // (EFECTO PUSH EN ARRAY NORMAL)
  return numeroAleatorio;
}

function historial() {
  document.getElementById('historialJ1').innerHTML = historialJ1.join('<br/>');
  document.getElementById('historialJ2').innerHTML = historialJ2.join('<br/>');
}

function estadisticasTirada(simbolo) {
  if (estadisticas[simbolo] == undefined) {
    estadisticas[simbolo] = 1;
  } else {
    estadisticas[simbolo] += 1;
  }

  let rdo = '';
  for (const indice in estadisticas) {
    //recorremos el array asociativo
    rdo += indice + '=' + estadisticas[indice] + '<br/>';
  }

  document.getElementById('estadisticas').innerHTML = rdo;
}
