//2. Crea un programa que pida al usuario dos números y diga cuál es el mayor de ellos

let num1 = parseInt(prompt("Escribe el primer numero"));
let num2 = parseInt(prompt("Escribe el segundo numero"));

if (num1 > num2) {
  alert("El numero:" + num1 + " es mayor");
} else if (num2 > num1) {
  alert("El numero:" + num2 + " es mayor");
} else {
  alert("Son los dos iguales");
}
