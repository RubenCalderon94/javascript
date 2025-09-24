/*
4. Crea un programa que pida al usuario dos números. Si el segundo no es cero, mostrará el
resultado de dividir el primero entre el segundo. Por el contrario, si el segundo número es cero,
escribirá "Error: No se puede dividir entre cero"
*/

let num1 = parseInt(prompt("Escribe el primer numero"));
let num2 = parseInt(prompt("Escribe el segundo numero"));
let resultado = 0;

if (num2 != 0) {
  resultado = num1 / num2;
} else {
  alert("El numero es: " + resultado + " no se puede dividir ");
}

alert("El numero es: " + resultado + " no se puede dividir ");
