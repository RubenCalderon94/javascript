//5. Crea un programa que pida al usuario dos números y diga si son iguales o, en caso contrario,
//cuál es el mayor de ellos.

let num1 = parseInt(prompt("Escribe el primer numero"));
let num2 = parseInt(prompt("Escribe el segundo numero"));

if (num1 == num2) {
  alert("Los dos numeros si son iguales, " + num1 + " ," + num2);
} else if (num1 > num2) {
  alert("El numero " + num1 + " es mayor");
} else {
  alert("El numero " + num2 + " es mayor");
}
