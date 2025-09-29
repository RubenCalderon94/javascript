/*
15. Crea un "calculador de cuadrados": pedirá al usuario un número y mostrará su cuadrado. Se
repetirá mientras el número introducido no sea cero.
*/

let num;
do {
    num=parseInt(prompt("Introduce un numero:"));

    if (num !=0 ) { //Si el numero es diferente a 0, entra. Si no, no.
     resultado=num*num;
        alert("El cuadrado del numero "+num+ " es: "+resultado);
    }

} while ( num != 0);//Si el numero es diferente a 0 el bucle sigue.Cuando sea 0 lo cumple y true.Entonces termina el bucle
alert("Fin del programa has introducido un 0");






