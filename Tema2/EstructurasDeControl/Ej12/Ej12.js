/*
12. Crea un programa que pida al usuario el ancho (por ejemplo, 4) y el alto (por ejemplo, 3) y 
muestre un rectángulo formado por esa cantidad de asteriscos: 
    **** 
    **** 
    **** 
*/

let ancho = parseInt(prompt("Escribe un numero que desee para el ancho"));
let alto = parseInt(prompt("Escribe un numero que desee para el alto"));
tablero = "";

for (let i = 0; i < ancho; i++) {
  for (let j = 0; j < alto; j++) {
    tablero += "*";
  }
  tablero += "\n";
}
alert(tablero);
