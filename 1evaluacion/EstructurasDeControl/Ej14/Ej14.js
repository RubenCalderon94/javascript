/*14. Crea un programa que pida al usuario su identificador y contraseña de manera indefinida hasta 
que introduzca el identificador “alibaba” y la contraseña “sesamo”. Si al tercer intento no ha 
introducido los datos correctos, mostrará un mensaje diciendo que el identificador/contraseña no 
son correctos.*/

let ident = "alibaba";
let contr = "sesamo";
let contador = 3;

do {
  let identificador = prompt("Introduce tu identificador");
  let contraseña = prompt("Introduce tu contraseña");

  if (identificador == ident && contraseña == contr) {
    alert("Genial estas dentro");
    break;
  } else {
    alert(
      "Identificador o contraseña incorrectos te quedan " +
        (contador - 1) +
        " intentos"
    );
    contador--;
    if (contador == 0) {
      alert("Has agotado los 3 intentos");
    }
  }
} while (contador != 0);
