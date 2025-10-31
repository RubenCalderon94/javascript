/*
1.- Escribe un script con, al menos, estos valores: 3, 3.5, “3”, "3.5", “7aaa”, “aaa7” y “hola”. Recorre el
array y muestra por consola el resultado de aplicar las funciones parseInt, parseFloat, isNan, Number y
String, a cada uno de los elementos del array. ¿Hay algún resultado que no esperabas?
*/

function ejercicio1() {
  let valores = [3, 3.5, "3", "3.5", "7aaa", "aaa7", "hola"];

  for (let valor of valores) {
    console.log(`Valor original: ${valor}`);

    console.log("parseInt:", parseInt(valor));
    console.log("parseFloat:", parseFloat(valor));
    console.log("isNaN:", isNaN(valor));
    console.log("Number:", Number(valor));
    console.log("String:", String(valor));

    console.log("---------------------------");
  }
}

//2.- Crea una función llamada "DibujarLinea3", que dibuje una línea con 3 asteriscos en la pantalla

function DibujarLinea3() {
  let linea = "";

  for (let i = 0; i < 3; i++) {
    linea += "*";
  }
  return linea;
}

/*
3.- Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado (en la pantalla) formado por
3 filas con 3 asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior).
*/

function DibujarCuadrado3x3() {
  let linea = "";
  for (let i = 0; i < 3; i++) {
    linea = linea + DibujarLinea3() + "\n";
  }
  alert(linea);
}

/*
4.- Crea una función llamada "DibujarLinea", que dibuje una línea con X asteriscos (en la pantalla). La
función tendrá un parámetro de entrada con el número de asteriscos a mostrar.
*/

function ejercicio4() {
  let numero = parseInt(prompt("Introduce numero de asteriscos"));
  DibujarLinea(numero); //Llamamos a la funcion y le metemos el parametro que arriba el usuario a introducido
}

function DibujarLinea(numero) {
  linea = "";
  for (let i = 0; i < numero; i++) {
    linea = linea + "*";
  }
  alert(linea);
}

/*
5.- Crea una función llamada "DibujarCuadrado", que dibuje un cuadrado formado por X filas con X
asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior). El script
pedirá al usuario el tamaño del cuadrado, y llamará a la función con ese dato.
*/
