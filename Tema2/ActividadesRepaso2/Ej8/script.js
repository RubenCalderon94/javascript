
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


let vectorCodificacion = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ",
   "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];
let simbolosJuego = ["✂️", "🖖", "🧻", "🦎", "🪨"];
let historialTiradas = ["✂️", "🧻", "🦎", "🪨", "🪨", "✂️", "🖖", "🖖", "🦎", "🪨",  "🦎" ,"✂️",
   "🧻", "🖖", "🖖", "✂️", "✂️", "✂️", "🖖", "🦎", "🪨", "✂️", "🖖", "🧻", "🪨"];








