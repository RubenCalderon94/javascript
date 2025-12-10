/*
Ejercicio1
Nos dan un array [5, 3, 2, 5, 5, 9, 4, 5]. Cuenta el número de elementos únicos (no repetidos) que hay.
*/

function elementosUnicos() {
  let array = [5, 3, 2, 5, 5, 9, 4, 5]; //declaramos array.
  let setArray = new Set(array); //con set nos elimina los repetidos

  console.log(setArray);
}

/*
Ejercicio2
Hacer una función que reciba un array como parámetro y devuelva true si todos los elementos del array
son únicos y false si hay algún elemento repetido. Al pulsar el botón del ejercicio debe mostrar un alert
indicando "Todos los elementos son únicos" o "Hay elementos repetidos"
*/

function compruebaArray(arrayLleno) {
  let setArray = new Set();

  for (const numeros of arrayLleno) {
    if (setArray.has(numeros)) {
      // Si el elemento ya está en el Set → está repetido
      alert("Hay numeros repetidos ");
      return;
    }
    // Si no estaba, lo añadimos
    setArray.add(numeros);
  }

  // Si terminamos el bucle sin encontrar repetidos
  alert("No hay numeros repetidos ");
}

function creaArray() {
  let array = new Array();

  for (let i = 1; i <= 5; i++) {
    let usuario = parseInt(prompt("Introduce 5 numeros, para crear un array"));
    array.push(usuario);
  }

  return array;
}

// Esta función la llama el botón y ejecuta las dos funciones y crea el ejercicio
function ejercicio2() {
  let miArray = creaArray(); // Pedir los números
  compruebaArray(miArray); // Comprobar si son únicos
}

/*
Ejercicio 3
Tenemos un array con los votos de unas votaciones Nacionales, en cada casilla del array está la provincia,
dos puntos y sus votos. Ejemplo: ["Madrid: 125", "Barcelona: 89", "Valencia: 45", "Sevilla: 32","Madrid:
31"]. Por un error se han duplicado las provincias en vez de sumarse los votos (pertenecen a varias
localidades) y queremos saber cuáles son las provincias que han votado. Hacer una función que reciba el
array de votos y devuelva un array con las provincias que han votado. Al pulsar el botón del ejercicio
debe mostrar un alert con las provincias que han votado cada una en una línea:
"Han votado las provincias:
//X
//X"
*/

function compruebaVotos() {
  let array = [
    "Madrid: 231",
    "Barcelona: 89",
    "Valencia: 45",
    "Sevilla: 32",
    "Madrid:31",
  ];

  let provincias = new Set(); // Aquí guardaremos nombres sin repetir

  for (let elemento of array) {
    let provincia = elemento.split(":")[0].trim(); // Me quedo con la provincia
    provincias.add(provincia); // El Set evita duplicados
  }

  // Convertimos el Set a un array normal
  let resultado = Array.from(provincias);

  // Preparamos texto para el alert
  alert("Han votado las provincias:\n" + resultado.join("\n"));
}
