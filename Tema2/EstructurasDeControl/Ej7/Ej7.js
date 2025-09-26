//7. Crea un programa que escriba en pantalla los números del 1 al 50 que sean múltiplos de 3.

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log(i + " si es multiplo");
  } else {
    console.log(i + " no es multiplo");
  }
}
