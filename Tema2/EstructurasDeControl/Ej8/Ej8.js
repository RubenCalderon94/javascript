//8. Crea un programa que muestre los números del 100 al 200 (ambos incluidos) que sean divisibles
//entre 7 y a la vez entre 3.

for (let i = 100; i <= 200; i++) {
  if (i % 7 == 0) {
    if (i % 3 == 0) {
      console.log(
        i + " primero si es divisible entre 7 y despues tambien lo es entre 3"
      );
    }
  } else {
    console.log(i + " no es divisible entre 7");
  }
}
