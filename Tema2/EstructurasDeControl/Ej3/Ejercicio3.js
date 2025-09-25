//3. Crea un programa que pida al usuario dos números y diga si el primero es múltiplo del segundo.

let num1 = parseInt(prompt("Escribe el primer numero"));
let num2 = parseInt(prompt("Escribe el segundo numero"));

if (num1 % num2 == 0) {
  alert("El numero " + num1 + " si es multiplo de " + num2);
} else {
  alert("El numero " + num1 + " no es multiplo de " + num2);
}
